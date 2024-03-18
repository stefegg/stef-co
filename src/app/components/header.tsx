"use client";
import React from "react";
import { ThemeContext } from "../providers/theme-provider";
import { useContext, useState } from "react";
import { HeaderMenu } from "./headerMenu";
import { themeGen } from "../utils";

export function Header() {
  const { appTheme } = useContext(ThemeContext);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <span
      className={`h-16 flex items-center px-4 border-b-2 
    ${themeGen(appTheme)}
    `}
    >
      <div
        className="ml-auto cursor-pointer"
        onClick={() => setShowDrop(!showDrop)}
      >
        Header
      </div>
      <div className={`fixed top-14 right-4  ${showDrop ? "flex" : "hidden"}`}>
        <HeaderMenu setShowDrop={setShowDrop} />
      </div>
    </span>
  );
}
