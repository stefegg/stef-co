"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../_providers/index";
import { logoTextGen, logoLineGen } from "../_utils";
import { lobsterFont } from "../fonts";

type LogoProps = {
  size: "large" | "small";
};

export default function Logo(props: LogoProps) {
  const { appTheme } = useContext(ThemeContext);
  const { size } = props;
  return (
    <div
      className={`${logoTextGen(appTheme, size)} flex flex-col items-center ${
        lobsterFont.className
      }`}
    >
      StefCo
      <div
        className={`${logoLineGen(
          appTheme,
          size
        )} rounded-tl-full rounded-br-full`}
      />
    </div>
  );
}
