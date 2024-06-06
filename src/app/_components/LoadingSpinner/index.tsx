"use client";
import { ThemeContext } from "../../_providers/index";
import { useContext } from "react";

export default function LoadingSpinner() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-${appTheme}-bodyBg`}
    >
      <div
        className={`animate-spin-slow rounded-full h-16 w-16 border-t-4 border-${appTheme}-text border-solid`}
      ></div>
    </div>
  );
}
