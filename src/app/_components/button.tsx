"use client";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type ButtonProps = {
  buttonText: string;
  size?: "sm" | "med" | "lg";
  styleType: "primary" | "secondary";
};

export default function Button(props: ButtonProps) {
  const { appTheme } = useContext(ThemeContext);
  const { buttonText, size, styleType } = props;
  const getSize = () => {
    switch (size) {
      case "sm":
        return `w-24 h-6 text-base text-sm`;
      case "med":
        return `w-48 h-12 text-base`;
      case "lg":
        return `w-72 h-16 text-lg`;
      default:
        `w-48 h-12 text-base`;
    }
  };
  const getStyle = () => {
    if (styleType === "primary") {
      return `bg-${appTheme}-containerBg border-${appTheme}-border text-${appTheme}-text hover:bg-${appTheme}-bodyBg`;
    }
    if (styleType === "secondary") {
      return `bg-${appTheme}-text border-${appTheme}-border text-${appTheme}-bodyBg hover:bg-${appTheme}-border hover:text-${appTheme}-text hover:border-${appTheme}-text`;
    }
  };
  return (
    <button className={`${getSize()} ${getStyle()} rounded-lg border-2`}>
      {buttonText}
    </button>
  );
}
