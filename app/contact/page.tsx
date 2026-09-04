import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

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

      <section className="bg-surface py-24 md:py-32">
        <div className="container-site mx-auto max-w-2xl">
          <SectionReveal>
            <div className="card-surface p-6 sm:p-10">
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
