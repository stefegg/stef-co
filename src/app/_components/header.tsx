"use client";
import React from "react";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext, useState } from "react";
import { HeaderMenu, Dropdown } from ".";
import Image from "next/image";
import { getFilter } from "../_utils";
import accountIcon from "../../../public/icons/account.png";
import cartIcon from "../../../public/icons/cart_png.png";

export default function Header() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const [showDrop, setShowDrop] = useState(false);

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const themeOptions = [
    {
      title: "Classic",
      setter: () => setAppTheme("classic"),
    },
    {
      title: "Light",
      setter: () => setAppTheme("light"),
    },
    {
      title: "Dark",
      setter: () => setAppTheme("dark"),
    },
  ];

  return (
    <span
      className={`h-16 flex items-center px-4 border-b-2 z-10 absolute w-full
    bg-${appTheme}-containerBg border-${appTheme}-border text-${appTheme}-text gap-10
    `}
    >
      <div className="ml-auto">
        <Dropdown title={"Site Theme"} options={themeOptions} />
      </div>
      <div
        className="cursor-pointer"
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
      <div className="cursor-pointer" onClick={() => setShowDrop(!showDrop)}>
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
