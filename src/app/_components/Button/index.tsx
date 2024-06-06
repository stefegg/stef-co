"use client";
import { useContext } from "react";
import { ThemeContext } from "../../_providers/index";

type ButtonProps = {
  buttonText: string;
  size?: "xs" | "sm" | "med" | "lg" | "xl";
  styleType: "primary" | "secondary";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button(props: ButtonProps) {
  const { appTheme } = useContext(ThemeContext);
  const { buttonText, size, styleType, onClick, type } = props;
  const getSize = () => {
    switch (size) {
      case "xs":
        return `w-24 h-6 text-base text-xs`;
      case "sm":
        return `w-32 h-8 text-base text-sm`;
      case "med":
        return `w-48 h-12 text-xs xl:text-base lg:text-sm`;
      case "lg":
        return `w-80 h-16 text-sm lg:text-xl md:text-lg sm:text-base`;
      case "xl":
        return `w-full h-16 text-xl`;
      default:
        `w-48 h-12 text-base`;
    }
  };
  const getStyle = () => {
    if (styleType === "primary") {
      return `bg-${appTheme}-containerBg border-${appTheme}-border text-${appTheme}-text hover:bg-${appTheme}-bodyBg hover:border-${appTheme}-secondary`;
    }
    if (styleType === "secondary") {
      return `bg-${appTheme}-text border-${appTheme}-border text-${appTheme}-bodyBg hover:bg-${appTheme}-border hover:text-${appTheme}-text hover:border-${appTheme}-text`;
    }
  };
  return (
    <button
      onClick={onClick}
      className={`${getSize()} ${getStyle()} rounded-lg border-2`}
      type={type ? type : "button"}
    >
      {buttonText}
    </button>
  );
}
