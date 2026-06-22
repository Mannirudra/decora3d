import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#E10600",
          accent: "#FF2D20",
        },
        brand: {
          black: "#0A0A0A",
          dark: "#1A1A1A",
          grey: "#F5F5F5",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Bebas Neue", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.8s ease forwards",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        "blueprint-scan": "blueprintScan 3s linear infinite",
        "grid-flow": "gridFlow 20s linear infinite",
        "counter-pop": "counterPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(225, 6, 0, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(225, 6, 0, 0)" },
        },
        blueprintScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gridFlow: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" },
        },
        counterPop: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(225,6,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(225,6,0,0.06) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(225,6,0,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(225,6,0,0.08) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
