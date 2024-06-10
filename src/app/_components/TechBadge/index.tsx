"use client";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import Image from "next/image";

type TechBadgeProps = {
  src: string;
  title: string;
  textSize: string;
  bgColor: string;
};

export default function TechBadge(props: TechBadgeProps) {
  const { appTheme } = useContext(ThemeContext);
  const { src, title, textSize, bgColor } = props;
  return (
    <div
      className={`bg-${appTheme}-${bgColor} h-full flex flex-col items-center justify-evenly rounded-lg w-full`}
    >
      <Image
        height={0}
        width={0}
        alt="tech"
        src={src}
        style={{
          width: "25%",
          height: "25%",
        }}
      />
      <div className={`text-${textSize} text-${appTheme}-text font-extralight`}>
        {title}
      </div>
    </div>
  );
}
