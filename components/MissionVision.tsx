import SectionReveal from "./SectionReveal";
import WaveDivider from "./WaveDivider";

export default function MissionVision() {
  return (
    <section className="relative bg-navy py-24 text-cream md:py-32">
      <div className="container-site grid gap-8 md:grid-cols-2 md:gap-10">
        <SectionReveal direction="left">
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="section-label !text-teal-light">Our Mission</p>
            <h2 className="heading-2 !text-cream">Our Mission</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/75 sm:text-lg">
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
            </div>
          </div>
        </SectionReveal>

        <SectionReveal direction="right" delay={0.1}>
          <div className="h-full rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/15 to-transparent p-8 md:p-10">
            <p className="section-label">Our Vision</p>
            <h2 className="heading-2 !text-cream">Our Vision</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/75 sm:text-lg">
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
            </div>
          </div>
        </SectionReveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[1px]">
        <WaveDivider fill="#F4F1EA" />
      </div>
    </section>
  );
}
