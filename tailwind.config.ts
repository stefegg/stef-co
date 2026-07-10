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
        secondary: "#03DAc6",
        link: "#23d1f6",
        tertiary: "#0681ee",
        divider: "#e5e7eb",
        background: '#18181b',
      },
    },
  },
  plugins: [],
};
export default config;
