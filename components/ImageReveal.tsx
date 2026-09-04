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
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: reduce ? 0 : 1.2, ease: easePremium }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover grayscale-[35%] transition duration-700 hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal/30 via-transparent to-signal/20" />
      </motion.div>
    </div>
  );
}
