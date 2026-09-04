"use client";

import { useState } from "react";

const offerings = [
  {
    title: "Educational Podcasts",
    description:
      "Easy-to-follow podcasts covering investment basics, market behavior, financial planning concepts, and real-world money situations—explained in simple language.",
  },
  {
    title: "Risk Trackers & Awareness",
    description:
      "Understand how risk impacts investments. Our content helps learners recognize volatility, risk exposure, and the importance of informed planning before investing.",
  },
  {
    title: "Investment Guides",
    description:
      "Step-by-step guides that explain financial instruments, investment concepts, and money habits—designed for beginners and growing learners.",
  },
  {
    title: "Investor Learning Support",
    description:
      "We help people ask the right questions about money, goals, and risk—without promoting products or offering advice.",
  },
];

export default function WhatWeOffer() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-void py-20 md:py-36">
      <div className="container-site">
        <p className="eyebrow">What we offer</p>
        <h2 className="display-md mt-4 max-w-3xl">What We Offer</h2>

        <ul className="mt-16 border-t-2 border-teal/20">
          {offerings.map((item, i) => {
            const open = active === i;
            return (
              <li key={item.title} className="border-b-2 border-teal/20">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-start gap-4 py-6 text-left transition-colors duration-300 hover:bg-night md:gap-10 md:py-7"
                >
                  <span
                    className={`w-12 shrink-0 font-display text-sm font-semibold transition-colors duration-300 ${
                      open ? "text-teal" : "text-mute"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-display text-xl font-semibold tracking-tight transition-transform duration-300 sm:text-3xl ${
                        open ? "md:translate-x-2 text-snow" : "text-snow/80"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 md:opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-3 block max-w-2xl text-mist">{item.description}</span>
                      </span>
                    </span>
                  </span>
                  <span
                    className={`mt-3 hidden h-px flex-1 origin-left bg-teal/70 transition-transform duration-500 md:block ${
                      open ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
