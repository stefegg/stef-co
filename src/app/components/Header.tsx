"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
export function Header() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  console.log(appTheme, "--------test");
  return <div className="h-12 bg-green-500">Header</div>;
}
