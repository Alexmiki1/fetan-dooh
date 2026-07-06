import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        night: "#15171c",
        dusk: "#1e2a4a",
        paper: "#f5f3ee",
        amber: "#ff8a1e",
        amberDim: "#cc6f15",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "amber-gradient": "linear-gradient(135deg, #ff8a1e 0%, #ff6b00 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #1e2a4a 0%, #15171c 50%, #0d0e12 100%)",
        "violet-panel":
          "linear-gradient(135deg, #2a1f4e 0%, #1e2a4a 50%, #15171c 100%)",
      },
      boxShadow: {
        amber: "0 0 40px rgba(255, 138, 30, 0.3)",
        "amber-lg": "0 0 80px rgba(255, 138, 30, 0.4)",
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};

export default config;
