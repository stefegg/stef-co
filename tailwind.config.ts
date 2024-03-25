import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          border: "#878787",
          text: "#005faf",
          containerBg: "#d0d0d0",
          bodyBg: "#E5E5E5",
          containerHover: "#E5E5E5",
        },
        dark: {
          border: "#3700b3",
          text: "#BB86FC",
          containerBg: "#000000",
          containerHover: "#3700b3",
          bodyBg: "#121212",
          secondary: "#03DAc6",
        },
        classic: {
          border: "#cd0909",
          text: "#ffdd00",
          bodyBg: "#3f5577",
          containerHover: "#33435B",
          containerBg: "#1F2E47",
          seconadry: "#03c51d",
        },
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-light-(border|text|containerBg|bodyBg|containerHover)/,
      variants: ["before", "hover"],
    },
    {
      pattern:
        /(bg|text|border)-classic-(border|text|containerBg|bodyBg|containerHover)/,
      variants: ["before", "hover"],
    },
    {
      pattern:
        /(bg|text|border)-dark-(border|text|containerBg|bodyBg|containerHover)/,
      variants: ["before", "hover"],
    },
  ],
};
export default config;
