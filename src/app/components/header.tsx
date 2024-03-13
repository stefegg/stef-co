"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext, useState } from "react";
import { HeaderMenu } from "./headerMenu";

export function Header() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const [showDrop, setShowDrop] = useState(false);
  return (
    <span className="h-12 bg-green-500 flex items-center px-4">
      <div
        className="ml-auto cursor-pointer"
        onClick={() => setShowDrop(!showDrop)}
      >
        Header
      </div>
      <div className={`fixed top-14 right-4 ${showDrop ? "flex" : "hidden"}`}>
        <HeaderMenu setShowDrop={setShowDrop} />
      </div>
    </span>
  );
}
