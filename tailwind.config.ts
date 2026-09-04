import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#E7F1EE",
        night: "#D4E8E2",
        panel: "#F3FAF7",
        steel: "#C3DDD6",
        teal: {
          DEFAULT: "#067A72",
          dim: "rgba(6, 122, 114, 0.18)",
        },
        signal: "#1D5FE0",
        gold: "#C06A0A",
        snow: "#08131C",
        mist: "#2E4250",
        mute: "#456070",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter2: "-0.04em",
      },
      backgroundImage: {
        "glow-a":
          "radial-gradient(circle at 18% 18%, rgba(6, 122, 114, 0.38), transparent 46%)",
        "glow-b":
          "radial-gradient(circle at 82% 8%, rgba(29, 95, 224, 0.22), transparent 40%)",
      },
      keyframes: {
        gridDrift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        gridDrift: "gridDrift 18s linear infinite",
        glowPulse: "glowPulse 8s ease-in-out infinite",
        dash: "dash 18s linear infinite",
        floatY: "floatY 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
