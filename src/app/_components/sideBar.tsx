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
      bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border min-w-full px-4`}
    >
      <Link
        href="/categories"
        className={`min-w-full flex justify-center text-nowrap hover:bg-${appTheme}-bodyBg rounded-md p-2`}
      >
        Shop By Category
      </Link>
      <Link
        href="/products"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
      >
        All Products
      </Link>

      <Link
        href="/adminPanel"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
      >
        Admin Panel
      </Link>
      <Link
        href="/about"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
      >
        About
      </Link>
    </div>
  );
}
