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
        primary: "#BB86FC",
        darkPrimary: "#3700b3",
        secondary: "#03DAc6",
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
          sunPrimary: "#23d1f6",
          sunSecondary: "#009fd7",
          sunTertiary: "#0564b8",
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
  safelist: [],
};
export default config;
