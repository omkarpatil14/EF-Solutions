import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

const socialLinks = [
  { label: "Facebook", href: SITE.socials.facebook },
  { label: "Twitter", href: SITE.socials.twitter },
  { label: "Instagram", href: SITE.socials.instagram },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 10% 100%, rgba(14,124,107,0.35), transparent), radial-gradient(ellipse 40% 30% at 90% 0%, rgba(224,122,58,0.14), transparent)",
        }}
      />
      <div className="container-site relative grid gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3" aria-label="MoneyMatters by ET home">
            <Image
              src="/images/logo.png"
              alt="MoneyMatters by ET logo"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-cream">
                money Matters
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
                by ET
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            MoneyMatters by ET is an education-focused platform helping people
            understand financial investments, risks, and smart money decisions
            through podcasts, guides, and practical insights.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-cream">Explore</h2>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch
                  className="link-underline text-sm text-cream/70 transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-cream">Stay in touch</h2>
          <p className="mb-5 text-sm text-cream/70">
            Have a question about our educational content? Reach out anytime.
          </p>
          <Link href="/contact" prefetch className="btn-primary text-xs">
            Contact us
          </Link>
          <div className="mt-6 flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-cream/50 transition-colors duration-200 hover:text-teal-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col items-center justify-between gap-2 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} MoneyMatters by ET. All rights reserved.</p>
          <p>Educational content only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
