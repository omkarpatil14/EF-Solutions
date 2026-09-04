"use client";

import Image from "next/image";
import Link from "next/link";
import WaveDivider from "./WaveDivider";

const headline = ["Learn", "Money.", "Understand", "Risk.", "Invest", "Smarter."];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <Image
        src="/images/hero-bg.jpg"
        alt="Abstract dark market backdrop for MoneyMatters by ET"
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover opacity-40"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 40%, rgba(14,124,107,0.38), transparent), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(224,122,58,0.16), transparent), linear-gradient(to bottom, rgba(7,24,37,0.5), rgba(7,24,37,0.88))",
        }}
      />

      <div className="container-site relative z-10 flex min-h-[100svh] flex-col justify-center pb-28 pt-32">
        <p className="section-label mb-5 !text-accent-soft">MoneyMatters by ET</p>

        <h1 className="heading-1 max-w-4xl text-cream">
          {headline.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="hero-word mr-[0.28em] inline-block"
              style={{ animationDelay: `${0.08 + i * 0.07}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="hero-word body-copy mt-6 max-w-2xl !text-cream/80"
          style={{ animationDelay: "0.58s" }}
        >
          MoneyMatters by ET is an education-focused platform helping people
          understand financial investments, risks, and smart money decisions
          through podcasts, guides, and practical insights.
        </p>

        <div className="hero-word mt-10" style={{ animationDelay: "0.78s" }}>
          <Link href="/about" prefetch className="btn-primary">
            About Us
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <WaveDivider fill="#F4F1EA" />
      </div>
    </section>
  );
}
