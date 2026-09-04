"use client";

import { StaggerContainer, StaggerItem } from "./SectionReveal";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    title: "AI-Based Research Techniques",
    description:
      "Leveraging advanced research tools and technology to enhance analysis and improve decision frameworks.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Customer-Centric Product Mix",
    description:
      "Designing educational content and solutions that align with the evolving needs of learners and investors.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Tech-Assisted Risk Management",
    description:
      "Integrating technology-enabled risk awareness to help individuals understand and manage potential uncertainties.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-site">
        <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="heading-2">How We Work</h2>
          <p className="body-copy mt-5">
            We follow a transparent and systematic approach that keeps trust at
            the core of everything we do. Our working philosophy is built on
            clarity, discipline, and continuous innovation.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid gap-7 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <article className="card-surface group relative h-full p-8">
                <span className="absolute right-6 top-6 font-display text-5xl text-teal/15 transition-colors duration-200 group-hover:text-teal/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="icon-well mb-6 transition-transform duration-200 group-hover:scale-105">
                  {step.icon}
                </div>
                <h3 className="heading-3">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
