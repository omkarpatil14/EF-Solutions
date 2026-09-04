"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "pending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

const initial: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 10)
      next.message = "Please write at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !data.success) {
        setStatus("error");
        setServerError(data.error || "Failed to send message");
        return;
      }
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again.");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      {/* Honeypot — leave empty */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="input-field"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            disabled={status === "pending"}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={status === "pending"}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          className="input-field"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          disabled={status === "pending"}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="input-field resize-y"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={status === "pending"}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "pending"}
        className="group btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "pending" ? "Sending…" : "Send message"}
      </button>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Message sent — we&apos;ll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="err"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {serverError || "Something went wrong. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
