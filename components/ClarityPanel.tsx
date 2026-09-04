"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

const pillars = [
  { num: "01", label: "Research", hint: "Learn the landscape" },
  { num: "02", label: "Risk", hint: "See the trade-offs" },
  { num: "03", label: "Clarity", hint: "Decide with context" },
];

export default function ClarityPanel() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-teal/25 bg-panel shadow-[0_24px_60px_rgba(6,122,114,0.14)]">
      <div className="absolute inset-0 bg-glow-a opacity-70" />
      <div className="relative grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
        {pillars.map((item, i) => (
          <motion.div
            key={item.label}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: easePremium }}
            className="rounded-2xl border border-teal/20 bg-void px-4 py-4"
          >
            <p className="font-display text-xs font-semibold text-teal">{item.num}</p>
            <p className="mt-2 font-display text-lg font-semibold text-snow">{item.label}</p>
            <p className="mt-1 text-sm text-mist">{item.hint}</p>
          </motion.div>
        ))}
      </div>
      <div className="relative mx-5 mb-5 overflow-hidden rounded-2xl bg-void sm:mx-6 sm:mb-6">
        <svg className="h-40 w-full sm:h-48" viewBox="0 0 560 180" fill="none" aria-hidden>
          <path
            d="M20 130C80 122 110 70 170 78C230 86 250 140 320 118C380 96 410 48 540 42"
            stroke="#067A72"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20 148C90 140 130 110 190 116C260 124 280 154 350 146C420 138 460 108 540 102"
            stroke="#1D5FE0"
            strokeWidth="1.6"
            strokeOpacity="0.7"
            strokeLinecap="round"
          />
          <circle cx="170" cy="78" r="5" fill="#067A72" />
          <circle cx="320" cy="118" r="5" fill="#1D5FE0" />
          <circle cx="540" cy="42" r="5" fill="#C06A0A" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-panel via-panel/80 to-transparent px-5 pb-5 pt-10">
          <p className="font-display text-xl font-semibold text-snow sm:text-2xl">
            Understand first.
            <span className="text-teal"> Then decide.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
