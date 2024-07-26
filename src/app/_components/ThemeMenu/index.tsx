"use client";
import React, { useRef, useEffect } from "react";
import { ThemeContext } from "../../_providers/index";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";

type ThemeMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
};

export default function ThemeMenu(props: ThemeMenuProps) {
  const { setShowDrop } = props;
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const themeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });
  const closeMenu = (e: any) => {
    if (themeRef.current && !themeRef.current.contains(e.target)) {
      setShowDrop(false);
    }
  };

  return (
    <div
      className={`flex flex-col w-32 border-2 rounded-md text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg font-light`}
      ref={themeRef}
    >
      <div
        className={`cursor-pointer flex flex-row justify-center w-full hover:bg-${appTheme}-containerBg py-4 rounded-md`}
        onClick={() => setAppTheme("classic")}
      >
        Classic
      </div>
      <div
        className={`cursor-pointer flex flex-row justify-center w-full hover:bg-${appTheme}-containerBg py-4 rounded-md`}
        onClick={() => setAppTheme("light")}
      >
        Light
      </div>
      <div
        className={`cursor-pointer flex flex-row justify-center w-full hover:bg-${appTheme}-containerBg py-4 rounded-md`}
        onClick={() => setAppTheme("dark")}
      >
        Dark
      </div>
    </div>
  );
}
