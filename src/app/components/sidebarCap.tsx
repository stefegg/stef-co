"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";
import Link from "next/link";
import { lobsterFont } from "../fonts";
import { Logo } from "./logo";

export function SidebarCap() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <div
        className={`min-h-16 max-h-16 flex flex-col items-center justify-center ${themeGen(
          appTheme
        )} ${lobsterFont.className}`}
      >
        <Logo size={"small"} />
      </div>
    </Link>
  );
}
