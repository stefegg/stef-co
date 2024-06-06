"use client";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import Image from "next/image";

type TechBadgeProps = {
  src: string;
  title: string;
};

export default function TechBadge(props: TechBadgeProps) {
  const { appTheme } = useContext(ThemeContext);
  const { src, title } = props;
  return (
    <div
      className={`bg-${appTheme}-containerBg h-full flex flex-col items-center justify-evenly rounded-lg`}
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
      <div className="text-4xl">{title}</div>
    </div>
  );
}
