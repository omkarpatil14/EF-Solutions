import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";
import FinancialBackground from "@/components/FinancialBackground";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MoneyMatters by ET. Send a message about our financial education content, podcasts, and guides.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact MoneyMatters by ET",
    description:
      "Get in touch with MoneyMatters by ET about our educational podcasts, guides, and risk-awareness content.",
    url: `${SITE.url}/contact`,
  },
  twitter: {
    title: "Contact MoneyMatters by ET",
    description:
      "Get in touch with MoneyMatters by ET about our educational podcasts, guides, and risk-awareness content.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumbLabel="Contact" />

      <section className="relative overflow-hidden bg-void py-24 md:py-32">
        <FinancialBackground />
        <div className="container-site relative z-10 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-4">
              LET&apos;S TALK
              <br />
              ABOUT
              <br />
              <span className="text-teal">MONEY.</span>
            </h2>
          </div>
          <SectionReveal>
            <div className="rounded-3xl border-2 border-teal/25 bg-panel p-6 shadow-[0_24px_60px_rgba(6,122,114,0.14)] sm:p-10">
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
