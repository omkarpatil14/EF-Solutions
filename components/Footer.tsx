import Image from "next/image";
import AppLink from "@/components/AppLink";
import FinancialBackground from "./FinancialBackground";
import { NAV_LINKS, SITE } from "@/lib/site";

const socialLinks = [
  { label: "Facebook", href: SITE.socials.facebook },
  { label: "Twitter", href: SITE.socials.twitter },
  { label: "Instagram", href: SITE.socials.instagram },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-teal/25 bg-night text-snow">
      <FinancialBackground />
      <div className="container-site relative py-24 md:py-32">
        <p className="display">
          THINK
          <br />
          CLEARLY.
          <br />
          <span className="text-teal">MOVE</span>
          <br />
          SMARTER.
        </p>
        <div className="mt-16 h-px w-full bg-teal/30" />
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <AppLink href="/" className="flex items-center gap-3" aria-label="MoneyMatters by ET home">
            <Image
              src="/images/logo.png"
              alt="MoneyMatters by ET logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm font-semibold">MoneyMatters by ET</span>
          </AppLink>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <AppLink href={link.href} className="text-sm text-mist transition-colors hover:text-teal">
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mist transition-colors hover:text-teal"
              >
                {s.label}
              </a>
            ))}
            <AppLink href="/contact" className="mt-2 text-sm text-snow hover:text-teal">
              Contact us →
            </AppLink>
          </div>
        </div>
        <p className="mt-16 text-xs text-mute">
          © {new Date().getFullYear()} MoneyMatters by ET. All rights reserved. Educational content only — not financial advice.
        </p>
      </div>
    </footer>
  );
}
