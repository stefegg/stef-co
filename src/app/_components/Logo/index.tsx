"use client";
import React from "react";
import { logoTextGen, logoLineGen } from "../../_utils";
import { lobsterFont } from "../../fonts";

type LogoProps = {
  size: "large" | "small";
  text: string;
};

const Logo = (props: LogoProps) => {
  const { size, text } = props;

  return (
    <div
      className={`${logoTextGen(size)} flex flex-col items-center ${
        lobsterFont.className
      }`}
    >
      {text}
      <div className={`${logoLineGen(size)} rounded-tl-full rounded-br-full`} />
    </div>
  );
};

export default Logo;
