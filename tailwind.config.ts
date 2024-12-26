import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lab: ["Lab Grotesque", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: ".4s fade-in ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

// screens: {
//   xxl: { max: '1280px' },
//   lg: { max: "1024px" },
//   md: { max: "768px" },
//   sm: { max: "640px" },
//   xs: { max: "480px" },
// },
