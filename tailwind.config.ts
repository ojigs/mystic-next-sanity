import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwind3d from "tailwindcss-3d";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          50: "#f2f2f2",
          100: "#cccccc",
        },
        secondary: {
          DEFAULT: "#000000",
          100: "#333333",
        },
        accent: {
          DEFAULT: "#ff3535",
        },
      },
      keyframes: {
        flip: {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        flip: "flip 1s ease-in-out",
        zoomIn: "zoomIn 0.3s ease-in-out",
      },
      // transform: {
      //   "rotateY-180": "rotateY(180deg)",
      //   "perspective-1000": "perspective(1000px)",
      // },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, tailwind3d],
} satisfies Config;
