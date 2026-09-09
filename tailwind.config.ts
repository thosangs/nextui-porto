import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        toska: {
          DEFAULT: "#2dd4bf",
          dark: "#14b8a6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      // Brutalist: sudut siku (radius 0), border tegas
      layout: {
        radius: { small: "0px", medium: "0px", large: "0px" },
        borderWidth: { small: "1px", medium: "2px", large: "3px" },
      },
      themes: {
        dark: {
          colors: {
            background: "#0a0a0a",
            foreground: "#f5f5f5",
            content1: "#141414",
            content2: "#181818",
            content3: "#1f1f1f",
            content4: "#262626",
            focus: "#2dd4bf",
            primary: { DEFAULT: "#2dd4bf", foreground: "#0a0a0a" },
            secondary: { DEFAULT: "#f5f5f5", foreground: "#0a0a0a" },
            default: { DEFAULT: "#1f1f1f", foreground: "#f5f5f5" },
          },
        },
      },
    }),
  ],
};
export default config;
