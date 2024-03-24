"use client";
import React from "react";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
import Link from "next/link";
import { lobsterFont } from "../fonts";

export default function Sidebar() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${lobsterFont.className} flex flex-col gap-6 -mt-[2px] h-full pt-10 items-center border-r-2 text-xl
      bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border`}
    >
      <Link href="/categories">
        <div className={`hover:bg-${appTheme}-bodyBg rounded-md p-2 px-4`}>
          Shop By Category
        </div>
      </Link>
      <Link href="/products">
        <div className={`hover:bg-${appTheme}-bodyBg rounded-md p-2 px-4`}>
          All Products
        </div>
      </Link>

      <Link href="/adminPanel">
        <div className={`hover:bg-${appTheme}-bodyBg rounded-md p-2 px-4`}>
          Admin Panel
        </div>
      </Link>
      <Link href="/about">
        <div className={`hover:bg-${appTheme}-bodyBg rounded-md p-2 px-4`}>
          About
        </div>
      </Link>
    </div>
  );
}
