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
        dark: {
          border: "#03c51d",
          text: "#03c51d",
          containerBg: "#000000",
          bodyBg: "#000000",
          bodyHover: "#363636",
        },
        classic: {
          border: "#cd0909",
          text: "#ffdd00",
          containerBg: "#3f5577",
          bodyBg: "#33435B",
          bodyHover: "#33435B",
        },
        red: "#cd0909",
        yellow: "#ffdd00",
        green: "#03c51d",
        navy: "#33435B",
        eggWhite: "#E5E5E5",
        newNavy: "#3f5577",
        charcoal: "#363636",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-light-(border|text|containerBg|bodyBg|bodyHover)/,
      variants: ["before", "hover"],
    },
    {
      pattern:
        /(bg|text|border)-classic-(border|text|containerBg|bodyBg|bodyHover)/,
      variants: ["before", "hover"],
    },
    {
      pattern:
        /(bg|text|border)-dark-(border|text|containerBg|bodyBg|bodyHover)/,
      variants: ["before", "hover"],
    },
  ],
};
export default config;
