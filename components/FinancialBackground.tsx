"use client";

import { useReducedMotion } from "framer-motion";

export default function FinancialBackground({
  className = "",
  dense = false,
}: {
  className?: string;
  dense?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-glow-a" />
      <div className="absolute inset-0 bg-glow-b" />
      <div
        className={`absolute inset-0 opacity-[0.45] ${reduce ? "" : "animate-gridDrift"}`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 122, 114, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 122, 114, 0.16) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 1200 800" fill="none">
        <path
          d="M40 520C180 480 240 360 380 340C540 316 620 470 780 450C920 432 980 280 1160 250"
          stroke="#067A72"
          strokeOpacity="0.7"
          strokeWidth="1.8"
          className={reduce ? "" : "animate-dash"}
          strokeDasharray="6 10"
        />
        <path
          d="M80 620C220 580 300 500 460 490C640 478 700 620 860 600C1000 586 1080 470 1180 450"
          stroke="#1D5FE0"
          strokeOpacity="0.45"
          strokeWidth="1.4"
        />
        <circle cx="380" cy="340" r="4" fill="#067A72" fillOpacity="0.9" className={reduce ? "" : "animate-glowPulse"} />
        <circle cx="780" cy="450" r="4" fill="#1D5FE0" fillOpacity="0.75" />
        <circle cx="1160" cy="250" r="3.5" fill="#C06A0A" fillOpacity="0.8" />
      </svg>
      {dense && (
        <div className="absolute right-[8%] top-[22%] hidden h-48 w-48 rounded-full border-2 border-teal/35 sm:block">
          <div className="absolute inset-8 rounded-full border border-signal/30" />
          <div className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal ${reduce ? "" : "animate-glowPulse"}`} />
        </div>
      )}
      <div className="noise" />
    </div>
  );
}
