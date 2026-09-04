"use client";

import ClarityPanel from "./ClarityPanel";
import TextReveal from "./TextReveal";
import SectionReveal from "./SectionReveal";

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-36">
      <p className="pointer-events-none absolute -right-6 top-16 hidden font-display text-[18vw] font-bold leading-none text-teal/20 md:block">
        THINK
        <br />
        CLEARLY
      </p>
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="font-display text-5xl font-bold text-teal/30 md:text-8xl">01</p>
          <p className="eyebrow mt-4">The idea · About MoneyMatters By ET</p>
          <TextReveal
            as="h2"
            className="display-md mt-6"
            lines={["FINANCIAL", "CLARITY", "STARTS WITH", "UNDERSTANDING."]}
          />
          <SectionReveal delay={0.15} className="mt-8 max-w-lg">
            <p className="body-copy">
              MoneyMatters by ET is built to simplify investing education for
              everyday people. We believe understanding money and risk should come
              before investing. Our platform focuses on learning, awareness, and
              clarity—so individuals can approach financial decisions with
              confidence and responsibility.
            </p>
          </SectionReveal>
        </div>

        <ClarityPanel />
      </div>
    </section>
  );
}
