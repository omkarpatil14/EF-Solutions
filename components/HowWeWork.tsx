"use client";

import { useEffect, useRef, useState } from "react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    title: "AI-Based Research Techniques",
    description:
      "Leveraging advanced research tools and technology to enhance analysis and improve decision frameworks.",
  },
  {
    title: "Customer-Centric Product Mix",
    description:
      "Designing educational content and solutions that align with the evolving needs of learners and investors.",
  },
  {
    title: "Tech-Assisted Risk Management",
    description:
      "Integrating technology-enabled risk awareness to help individuals understand and manage potential uncertainties.",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="how-we-work" className="relative bg-night py-28 md:py-36">
      <div className="container-site">
        <SectionReveal>
          <p className="eyebrow">How we work</p>
          <h2 className="display-md mt-4">How We Work</h2>
          <p className="body-copy mt-6 max-w-2xl">
            We follow a transparent and systematic approach that keeps trust at
            the core of everything we do. Our working philosophy is built on
            clarity, discipline, and continuous innovation.
          </p>
        </SectionReveal>

        <div className="relative mt-16">
          <div className="mb-12 hidden h-1 bg-teal/25 md:block">
            <div
              className="h-px bg-teal transition-all duration-700"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
          <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`relative border-l-2 border-teal/30 pl-6 md:border-l-0 md:pl-0 ${
                  active === i ? "opacity-100" : "opacity-55"
                }`}
              >
                <span
                  className={`font-display text-sm font-semibold ${
                    active === i ? "text-teal" : "text-mute"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-snow">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
