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
};
export default config;
