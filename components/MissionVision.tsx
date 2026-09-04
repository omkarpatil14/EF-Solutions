"use client";

import SectionReveal from "./SectionReveal";

export default function MissionVision() {
  return (
    <section className="relative grid min-h-[80vh] overflow-hidden md:grid-cols-2">
      <article className="group relative flex flex-col justify-center border-snow/10 bg-steel px-8 py-24 md:border-r md:px-14 lg:px-20">
        <div className="pointer-events-none absolute -left-4 top-10 font-display text-[20vw] font-bold text-teal/25 md:text-[9vw]">
          M
        </div>
        <p className="eyebrow">Our Mission</p>
        <h2 className="display-md mt-4">Our Mission</h2>
        <SectionReveal className="mt-8 max-w-md space-y-4 text-mist">
          <p>
            Our mission is to improve financial literacy by making investment
            education simple, transparent, and accessible. We aim to help
            individuals understand financial concepts, assess risk
            responsibly, and make informed money decisions through unbiased
            podcasts, guides, and educational insights.
          </p>
          <p>
            We focus on learning before investing—so people can approach
            financial decisions with clarity, confidence, and discipline.
          </p>
        </SectionReveal>
      </article>
      <article className="relative flex flex-col justify-center bg-night px-8 py-24 md:px-14 lg:px-20">
        <div className="pointer-events-none absolute -right-4 top-10 font-display text-[20vw] font-bold text-gold/25 md:text-[9vw]">
          V
        </div>
        <p className="eyebrow !text-gold">Our Vision</p>
        <h2 className="display-md mt-4">Our Vision</h2>
        <SectionReveal className="mt-8 max-w-md space-y-4 text-mist">
          <p>
            Our vision is to become a trusted financial education platform
            that empowers individuals to navigate the investment landscape
            with understanding and responsibility.
          </p>
          <p>
            We aspire to create a community where informed thinking, risk
            awareness, and long-term financial learning guide better money
            decisions—without confusion, pressure, or misinformation.
          </p>
        </SectionReveal>
      </article>
    </section>
  );
}
