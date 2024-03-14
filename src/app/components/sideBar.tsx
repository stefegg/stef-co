"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import Link from "next/link";
import { themeGen, hoverGen } from "../utils";

export function Sidebar() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-6 h-full pt-10 items-center border-r-2
      ${themeGen(appTheme)}`}
    >
      <Link href="/featured">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          New Products
        </div>
      </Link>
      <Link href="/allProducts">
        <div className={`${hoverGen(appTheme)} rounded-md p-2 px-4`}>
          All Products
        </div>
      </Link>
      <div className="cursor-pointer">Categories</div>
    </div>
  );
}
