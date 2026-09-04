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

      <section className="relative overflow-hidden bg-night py-28 md:py-36">
        <p className="pointer-events-none absolute right-0 top-10 font-display text-[22vw] font-bold leading-none text-teal/20">
          01
        </p>
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <p className="eyebrow">About MoneyMatters By ET</p>
            <h2 className="display-md mt-4">About Us</h2>
            <div className="mt-8 space-y-4 text-mist">
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
