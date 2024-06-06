import { Lobster } from "next/font/google";
import { Inter } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"] });

export const lobsterFont = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const robotoFont = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});
