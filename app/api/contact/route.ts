import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z
    .string()
    .trim()
    .min(10, "Message is too short")
    .max(5000, "Message is too long"),
  website: z.string().optional(), // honeypot
});

/** Simple in-memory rate limit (per process). Prefer Upstash Redis for higher traffic. */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function getClientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json({ success: false, error: message }, { status: 400 });
    }

    const { name, email, subject, message, website } = parsed.data;

    // Honeypot: bots fill hidden fields — reject silently
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ||
      "MoneyMatters <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toEmail,
      subject: `New contact form message: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
