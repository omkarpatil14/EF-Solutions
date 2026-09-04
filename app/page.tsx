import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import WhatWeOffer from "@/components/WhatWeOffer";
import FeaturedInsights from "@/components/FeaturedInsights";
import MissionVision from "@/components/MissionVision";
import AboutEquiTrust from "@/components/AboutEquiTrust";
import HowWeWork from "@/components/HowWeWork";
import StatementSection from "@/components/StatementSection";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Financial Education | Learn Money, Understand Risk",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "MoneyMatters by ET | Learn Money. Understand Risk. Invest Smarter.",
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    title: "MoneyMatters by ET | Learn Money. Understand Risk. Invest Smarter.",
    description: SITE.description,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <AboutTeaser />
      <WhatWeOffer />
      <FeaturedInsights />
      <MissionVision />
      <AboutEquiTrust />
      <HowWeWork />
      <StatementSection />
      <TeamSection />
    </>
  );
}
