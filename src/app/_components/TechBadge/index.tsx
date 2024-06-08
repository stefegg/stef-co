"use client";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import Image from "next/image";
import { TechBadgeProps } from "@/app/_types";

export default function TechBadge(props: TechBadgeProps) {
  const { appTheme } = useContext(ThemeContext);
  const { src, title, textSize, bgColor } = props;
  return (
    <div
      className={`bg-${appTheme}-${bgColor} h-full flex flex-col items-center justify-evenly rounded-lg`}
    >
      <Image
        height={0}
        width={0}
        alt="tech"
        src={src}
        style={{
          width: "75%",
          height: "50%",
        }}
      />
      <div className={`text-${textSize} text-${appTheme}-text font-light`}>
        {title}
      </div>
    </div>
  );
}
