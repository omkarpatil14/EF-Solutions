import Image from "next/image";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import WaveDivider from "./WaveDivider";

export default function AboutEquiTrust() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <SectionReveal direction="left">
          <div className="img-frame relative aspect-[4/3]">
            <Image
              src="/images/about-teaser.jpg"
              alt="EquiTrust research and education workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </SectionReveal>

        <SectionReveal direction="right" delay={0.08}>
          <p className="section-label">Who We Are</p>
          <h2 className="heading-2 uppercase tracking-wide">About EquiTrust</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              EquiTrust is a financial education and research-driven platform
              focused on building trust, transparency, and informed
              decision-making in the investment ecosystem.
            </p>
            <p>
              We believe that strong financial outcomes begin with clear
              understanding, rational thinking, and disciplined processes. Our
              approach is designed to help individuals understand investments,
              risk dynamics, and decision frameworks before committing capital.
            </p>
          </div>
          <Link href="/about" prefetch className="btn-primary mt-8">
            About Us
          </Link>
        </SectionReveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[1px]">
        <WaveDivider fill="#EEF4F3" />
      </div>
    </section>
  );
}
