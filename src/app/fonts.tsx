import { Lobster } from "next/font/google";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import { PT_Sans } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"] });

export const lobsterFont = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const ptSansFont = PT_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
