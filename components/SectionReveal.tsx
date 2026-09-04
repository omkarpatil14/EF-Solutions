"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section";
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.45,
  once = true,
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: easeOut },
    },
  };

  return (
    <motion.div
      className={className}
      data-reveal
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-reveal
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-reveal
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.4, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
