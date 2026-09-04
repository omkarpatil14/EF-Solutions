import Image from "next/image";
import SectionReveal from "./SectionReveal";
import WaveDivider from "./WaveDivider";

export default function AboutTeaser() {
  return (
    <section className="relative bg-surface pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionReveal direction="left">
          <div className="img-frame relative aspect-[4/3]">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl bg-teal/15" />
            <div className="absolute -bottom-7 -right-7 h-32 w-32 rounded-full bg-accent/15" />
            <Image
              src="/images/about-teaser.jpg"
              alt="Financial education discussion illustrating MoneyMatters by ET"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </SectionReveal>

        <SectionReveal direction="right" delay={0.08}>
          <p className="section-label">About MoneyMatters By ET</p>
          <h2 className="heading-2">About MoneyMatters By ET</h2>
          <p className="body-copy mt-6">
            MoneyMatters by ET is built to simplify investing education for
            everyday people. We believe understanding money and risk should come
            before investing. Our platform focuses on learning, awareness, and
            clarity—so individuals can approach financial decisions with
            confidence and responsibility.
          </p>
        </SectionReveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[1px]">
        <WaveDivider fill="#EEF4F3" />
      </div>
    </section>
  );
}
