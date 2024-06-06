"use client";
import React from "react";
import { useContext } from "react";
import Link from "next/link";
import { lobsterFont } from "../../fonts";
import { Logo } from "../index";
import { ThemeContext } from "../../_providers/index";

export default function HeaderLogo() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <div
        className={`min-h-16 max-h-16 flex flex-col items-center justify-center text-${appTheme}-text  ${lobsterFont.className} w-full `}
      >
        <Logo size={"small"} text="StefCo" />
      </div>
    </Link>
  );
}
