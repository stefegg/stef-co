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
        link: "#23d1f6",
        tertiary: "#0564b8",
      },
    },
  },
  plugins: [],
  safelist: [],
};
export default config;
