"use client";

import AppLink from "@/components/AppLink";
import FinancialBackground from "./FinancialBackground";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

const lines = [
  { text: "UNDERSTAND", accent: false },
  { text: "MONEY.", accent: true },
  { text: "MASTER", accent: false },
  { text: "THE", accent: false },
  { text: "DECISION.", accent: false },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const t = (delay: number) => ({
    duration: reduce ? 0 : 0.9,
    delay: reduce ? 0 : delay,
    ease: easePremium,
  });

  return (
    <section className="relative min-h-[auto] overflow-hidden bg-void md:min-h-[100svh]">
      <FinancialBackground dense />

      <div className="container-site relative z-10 grid items-center gap-10 pb-16 pt-28 md:min-h-[100svh] md:gap-12 md:pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.35)}
            className="eyebrow"
          >
            Money Intelligence Platform
          </motion.p>

          <h1 className="display mt-6">
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.accent ? "text-teal" : "text-snow"}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={t(0.45 + i * 0.08)}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(1.05)}
            className="body-copy mt-8 max-w-xl"
          >
            MoneyMatters by ET is an education-focused platform helping people
            understand financial investments, risks, and smart money decisions
            through podcasts, guides, and practical insights.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(1.2)}
            className="mt-10 flex flex-wrap gap-3"
          >
            <AppLink href="/about" className="group btn-primary">
              Explore Insights
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </AppLink>
            <a href="#how-we-work" className="btn-secondary">
              How We Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={t(0.8)}
          className="relative hidden aspect-square max-h-[520px] lg:block"
        >
          <div className="absolute inset-0 rounded-full border-2 border-teal/30" />
          <div className="absolute inset-10 rounded-full border-2 border-teal/45" />
          <div className="absolute inset-24 rounded-full border-2 border-signal/40" />
          <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_28px_#067A72]" />
          <p className="absolute left-[8%] top-[18%] text-[10px] font-semibold uppercase tracking-[0.3em] text-snow">Research</p>
          <p className="absolute bottom-[22%] right-[6%] text-[10px] font-semibold uppercase tracking-[0.3em] text-snow">Clarity</p>
          <p className="absolute right-[12%] top-[48%] text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Risk</p>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" aria-hidden>
            <path d="M70 210C120 160 170 250 230 190C280 140 320 220 360 180" stroke="#067A72" strokeOpacity="0.7" strokeWidth="1.8" />
            <path d="M50 250C110 230 150 300 220 270C290 240 320 300 370 280" stroke="#1D5FE0" strokeOpacity="0.5" strokeWidth="1.6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
