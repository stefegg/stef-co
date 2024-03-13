"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";

export function Sidebar() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-2 items-center pt-20 w-1/12 border-r-2
      ${
        appTheme === "Light"
          ? "bg-white text-black border-black"
          : "bg-black text-white border-white"
      }
      `}
    >
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello!</div>
    </div>
  );
}
