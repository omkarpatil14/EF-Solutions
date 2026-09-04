import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageBanner from "@/components/PageBanner";
import SectionReveal from "@/components/SectionReveal";
import AboutEquiTrust from "@/components/AboutEquiTrust";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MoneyMatters by ET — helping people understand financial investments before committing their money. Education, awareness, and responsible learning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MoneyMatters by ET",
    description:
      "MoneyMatters by ET was created to help people understand financial investments before committing their money.",
    url: `${SITE.url}/about`,
  },
  twitter: {
    title: "About MoneyMatters by ET",
    description:
      "MoneyMatters by ET was created to help people understand financial investments before committing their money.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About us" breadcrumbHomeLabel="Home" />

      <section className="bg-surface py-24 md:py-32">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <p className="section-label">About MoneyMatters By ET</p>
            <h2 className="heading-2 uppercase tracking-wide">About Us</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                MoneyMatters by ET was created with a clear purpose—to help
                people understand financial investments before committing their
                money.
              </p>
              <p>
                In a world filled with confusing advice and unrealistic
                expectations, we focus on education, awareness, and responsible
                learning.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <AboutEquiTrust />
      <HowWeWork />
    </>
  );
}
