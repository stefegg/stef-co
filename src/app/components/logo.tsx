"use client";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";
import { logoTextGen, logoLineGen } from "../_utils";

type LogoProps = {
  size: string;
};

export default function Logo(props: LogoProps) {
  const { appTheme } = useContext(ThemeContext);
  const { size } = props;
  return (
    <div
      className={`${logoTextGen(
        appTheme,
        size
      )} flex flex-col h-full w-full items-center `}
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
