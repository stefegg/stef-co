"use client";
import React from "react";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext } from "react";
import Link from "next/link";
import { themeGen, hoverGen } from "../_utils";
import { lobsterFont } from "../fonts";

export default function Sidebar() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        lobsterFont.className
      } flex flex-col gap-6 -mt-[2px] h-full pt-10 items-center border-r-2 text-xl
      ${themeGen(appTheme)}`}
    >
      <Link href="/featured">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          Featured Products
        </div>
      </Link>
      <Link href="/products">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          All Products
        </div>
      </Link>
      <Link href="/categories">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          Categories
        </div>
      </Link>
      <Link href="/adminPanel">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          Admin Panel
        </div>
      </Link>
      <Link href="/about">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>About</div>
      </Link>
    </div>
  );
}
