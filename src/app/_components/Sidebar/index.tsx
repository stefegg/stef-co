"use client";
import React, { useRef, useEffect, RefObject } from "react";
import { ThemeContext } from "../../_providers/index";
import { useContext } from "react";
import Link from "next/link";
import { robotoFont } from "../../fonts";

type SidebarProps = {
  toggleRef: RefObject<HTMLDivElement>;
};

export default function Sidebar(props: SidebarProps) {
  const { appTheme, showSidebar, setShowSidebar } = useContext(ThemeContext);
  const { toggleRef } = props;
  const sideBarRef = useRef<HTMLDivElement>(null);
  const getTranslate = () => {
    if (showSidebar === true) {
      return `translate-x-full`;
    } else return null;
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  });
  const closeSidebar = (e: any) => {
    if (
      showSidebar &&
      sideBarRef.current &&
      !sideBarRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ) {
      setShowSidebar(false);
    }
  };
  return (
    <div
      className={`${
        robotoFont.className
      } hidden sm:flex flex-col gap-6 pt-10 items-center
      bg-${appTheme}-containerBg text-${appTheme}-text px-4 text-xs xl:text-xl lg:text-lg md:text-base sm:text-xs absolute h-[calc(100vh-4rem)] top-16 -left-1/4 w-1/4 transition duration-500 ${getTranslate()} z-[10001] bg-opacity-60 hover:bg-opacity-80 font-light`}
      ref={sideBarRef}
    >
      <Link
        href="/categories"
        className={`min-w-full flex justify-center lg:text-nowrap hover:bg-${appTheme}-bodyBg rounded-md p-2`}
        onClick={() => setShowSidebar(false)}
      >
        Categories
      </Link>
      <Link
        href="/products"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
        onClick={() => setShowSidebar(false)}
      >
        All Products
      </Link>
      <Link
        href="/admin-panel"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
        onClick={() => setShowSidebar(false)}
      >
        Admin
      </Link>
    </div>
  );
}
