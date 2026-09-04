"use client";

import { StaggerContainer, StaggerItem } from "./SectionReveal";
import WaveDivider from "./WaveDivider";

const offerings = [
  {
    title: "Educational Podcasts",
    description:
      "Easy-to-follow podcasts covering investment basics, market behavior, financial planning concepts, and real-world money situations—explained in simple language.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Risk Trackers & Awareness",
    description:
      "Understand how risk impacts investments. Our content helps learners recognize volatility, risk exposure, and the importance of informed planning before investing.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Investment Guides",
    description:
      "Step-by-step guides that explain financial instruments, investment concepts, and money habits—designed for beginners and growing learners.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Investor Learning Support",
    description:
      "We help people ask the right questions about money, goals, and risk—without promoting products or offering advice.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative bg-section-soft py-24 md:py-32">
      <div className="container-site">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="heading-2">What We Offer</h2>
        </div>

        <StaggerContainer className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card-surface group h-full p-8">
                <div className="icon-well mb-6 group-hover:bg-teal group-hover:text-cream">
                  {item.icon}
                </div>
                <h3 className="heading-3">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[1px]">
        <WaveDivider fill="#0B2438" />
      </div>
    </section>
  );
}
