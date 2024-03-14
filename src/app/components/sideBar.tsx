"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import Link from "next/link";

export function Sidebar() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-6 items-center pt-20 w-[13%] border-r-2
      ${
        appTheme === "Classic"
          ? "bg-white text-black border-black"
          : "bg-black text-white border-white"
      }
      `}
    >
      <Link href="/featured">New Products</Link>
      <Link href="/allProducts">All Products</Link>
      <div>Categories</div>
    </div>
  );
}
