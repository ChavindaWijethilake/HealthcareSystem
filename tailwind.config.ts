import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: {
          500: "#2dd4bf", // Vibrant Teal
          600: "#14b8a6", // Darker Teal
        },
        primary: {
          DEFAULT: "#2dd4bf",
          foreground: "#ffffff",
        },
        blue: {
          500: "#38bdf8", // Sky Blue
          600: "#0284c7",
        },
        red: {
          500: "#fb7185", // Rose
          600: "#e11d48",
          700: "#be123c",
        },
        light: {
          200: "#f1f5f9", // Slate 100
        },
        dark: {
          200: "#0f172a", // Slate 900
          300: "#1e293b", // Slate 800
          400: "#334155", // Slate 700
          500: "#475569", // Slate 600
          600: "#94a3b8", // Slate 400
          700: "#cbd5e1", // Slate 300
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;