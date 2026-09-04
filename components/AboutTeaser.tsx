"use client";

import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import SectionReveal from "./SectionReveal";

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-night py-28 md:py-36">
      <p className="pointer-events-none absolute -right-6 top-16 font-display text-[18vw] font-bold leading-none text-teal/20">
        THINK
        <br />
        CLEARLY
      </p>
      <div className="container-site grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-display text-7xl font-bold text-teal/30 md:text-8xl">01</p>
          <p className="eyebrow mt-4">The idea · About MoneyMatters By ET</p>
          <TextReveal
            as="h2"
            className="display-md mt-6"
            lines={["FINANCIAL", "CLARITY", "STARTS WITH", "UNDERSTANDING."]}
          />
        </div>

        <div className="relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal/40 via-transparent to-signal/20 opacity-70" />
          <ImageReveal
            src="/images/about-teaser.jpg"
            alt="Financial education discussion illustrating MoneyMatters by ET"
            className="relative aspect-[4/5] max-h-[620px] w-full rounded-2xl sm:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute -left-2 top-10 hidden flex-col gap-6 text-[10px] uppercase tracking-[0.28em] text-mist md:flex">
            {["Research", "Risk", "Clarity"].map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span className="h-px w-8 bg-teal/60" />
                {item}
              </span>
            ))}
          </div>
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
      </div>
    </section>
  );
}
