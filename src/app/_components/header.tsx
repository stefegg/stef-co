"use client";
import React from "react";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext, useState } from "react";
import HeaderMenu from "./headerMenu";
import { themeGen } from "../_utils";
import Image from "next/image";
import accountIcon from "../../../public/icons/account.png";
import cartIcon from "../../../public/icons/cart_png.png";

export default function Header() {
  const { appTheme } = useContext(ThemeContext);
  const [showDrop, setShowDrop] = useState(false);

  const getFilter = () => {
    if (appTheme === "Classic") {
      return "invert(86%) sepia(21%) saturate(3341%) hue-rotate(360deg) brightness(105%) contrast(101%)";
    } else {
      return "invert(44%) sepia(97%) saturate(749%) hue-rotate(88deg) brightness(99%) contrast(104%)";
    }
  };

  const iconStyle = {
    filter: getFilter(),
  };

  return (
    <span
      className={`h-16 flex items-center px-4 border-b-2 z-10 absolute w-full
    ${themeGen(appTheme)}
    `}
    >
      <div
        className="ml-auto cursor-pointer"
        onClick={() => console.log("coming soon")}
      >
        <Image
          src={cartIcon}
          height={24}
          width={24}
          alt="cart Icon"
          style={iconStyle}
        />
      </div>
      <div
        className="ml-6 cursor-pointer"
        onClick={() => setShowDrop(!showDrop)}
      >
        <Image
          src={accountIcon}
          height={24}
          width={24}
          alt="Account Icon"
          style={iconStyle}
        />
      </div>
      <div className={`fixed top-14 right-4  ${showDrop ? "flex" : "hidden"}`}>
        <HeaderMenu setShowDrop={setShowDrop} />
      </div>
    </span>
  );
}
