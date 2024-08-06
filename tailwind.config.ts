import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
