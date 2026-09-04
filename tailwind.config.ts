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
        navy: {
          DEFAULT: "#0B2438",
          soft: "#16344C",
          deep: "#071825",
        },
        teal: {
          DEFAULT: "#0E7C6B",
          light: "#149C88",
          muted: "#D7EFEA",
        },
        accent: {
          DEFAULT: "#E07A3A",
          soft: "#F0A56A",
        },
        cream: "#F4F1EA",
        surface: {
          DEFAULT: "#F4F1EA",
          card: "#FFFcf7",
          mist: "#E4DFD4",
          tint: "#E8F1EF",
        },
        ink: {
          DEFAULT: "#1C2A36",
          muted: "#536271",
          light: "#7A8894",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
      },
      boxShadow: {
        card: "0 10px 30px -16px rgba(11, 36, 56, 0.22)",
        "card-hover": "0 22px 44px -18px rgba(11, 36, 56, 0.32)",
        nav: "0 8px 28px -16px rgba(7, 24, 37, 0.45)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 18% 40%, rgba(14, 124, 107, 0.38), transparent), radial-gradient(ellipse 55% 45% at 82% 18%, rgba(224, 122, 58, 0.18), transparent), linear-gradient(160deg, #071825 0%, #0B2438 50%, #0E3D4A 100%)",
        "section-soft":
          "linear-gradient(180deg, #EEF4F3 0%, #E4EDE9 100%)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      animation: {
        "ken-burns": "kenBurns 32s ease-in-out infinite alternate",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
