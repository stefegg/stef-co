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
          secondary: "#5fafd7",
          error: "#B00020",
          link: "#5fafd7",
          photoMatte: "#363636",
        },
        dark: {
          border: "#3700b3",
          text: "#BB86FC",
          containerBg: "#000000",
          containerHover: "#3700b3",
          bodyBg: "#121212",
          secondary: "#03DAc6",
          error: "#cf6679",
          link: "#0070E0",
          photoMatte: "#363636",
        },
        classic: {
          border: "#cd0909",
          text: "#ffdd00",
          bodyBg: "#3f5577",
          containerHover: "#33435B",
          containerBg: "#1F2E47",
          secondary: "#03c51d",
          error: "#cd0909",
          link: "#5fafd7",
          photoMatte: "#363636",
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
        /(bg|text|border)-light-(border|text|containerBg|bodyBg|containerHover|error|link|secondary|photoMatte)/,
      variants: ["before", "hover", "focus"],
    },
    {
      pattern:
        /(bg|text|border)-classic-(border|text|containerBg|bodyBg|containerHover|error|link|secondary|photoMatte)/,
      variants: ["before", "hover", "focus"],
    },
    {
      pattern:
        /(bg|text|border)-dark-(border|text|containerBg|bodyBg|containerHover|error|link|secondary|photoMatte)/,
      variants: ["before", "hover", "focus"],
    },
  ],
};
export default config;
