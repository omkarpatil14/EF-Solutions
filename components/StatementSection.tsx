"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

const words = ["BETTER", "DECISIONS", "START WITH", "BETTER", "UNDERSTANDING."];

export default function StatementSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-void py-32 md:py-44">
      <div className="container-site">
        <p className="display">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              className={`mr-[0.25em] inline-block ${i === 1 || i === 4 ? "text-teal" : "text-snow"}`}
              initial={reduce ? false : { opacity: 0.2, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easePremium }}
            >
              {w}
            </motion.span>
          ))}
        </p>
        <motion.div
          className="mt-16 h-1 origin-left bg-gradient-to-r from-teal via-signal to-gold/70"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easePremium }}
        />
      </div>
    </section>
  );
}
