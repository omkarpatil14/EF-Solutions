"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

export default function ImageReveal({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        data-reveal
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduce ? 0 : 0.8, ease: easePremium }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal/20 via-transparent to-signal/10" />
      </motion.div>
    </div>
  );
}
