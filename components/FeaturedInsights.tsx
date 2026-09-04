"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

const principles = ["UNDERSTAND", "ASSESS", "DECIDE"];

export default function FeaturedInsights() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-night py-20 md:py-36">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <h2 className="display text-center lg:text-left">
          KNOW
          <br />
          BEFORE
          <br />
          YOU
          <br />
          <span className="text-teal">DECIDE.</span>
        </h2>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full border-2 border-teal/30" />
          <div className="absolute inset-[18%] rounded-full border-2 border-teal/50" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10"
            animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" aria-hidden>
            <circle cx="200" cy="200" r="118" stroke="#1D5FE0" strokeOpacity="0.45" />
            <path d="M200 82 L302 258 L98 258 Z" stroke="#067A72" strokeOpacity="0.55" />
          </svg>
          {principles.map((p, i) => (
            <motion.p
              key={p}
              className="absolute text-[10px] font-semibold tracking-[0.18em] text-snow sm:text-xs sm:tracking-[0.28em]"
              style={
                i === 0
                  ? { top: "4%", left: "50%", transform: "translateX(-50%)" }
                  : i === 1
                    ? { bottom: "14%", right: "0" }
                    : { bottom: "14%", left: "0" }
              }
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * i, ease: easePremium }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
