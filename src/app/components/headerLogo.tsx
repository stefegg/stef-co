"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";
import Link from "next/link";
import { lobsterFont } from "../fonts";

export function HeaderLogo() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <div
        className={`min-h-16 max-h-16 flex flex-col items-center justify-center text-4xl font-outline-1 pt-1 ${themeGen(
          appTheme
        )} ${lobsterFont.className}`}
      >
        StefCo
        <div className="bg-yellow border-red border rounded-tl-full rounded-br-full h-[6px] w-1/2 mt-1 " />
      </div>
    </Link>
  );
}
