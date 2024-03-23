"use client";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type ButtonProps = {
  buttonText: string;
  size: "sm" | "med" | "lg";
  styleType: "primary" | "secondary";
};

export default function Button(props: ButtonProps) {
  const { appTheme } = useContext(ThemeContext);
  const { buttonText, size } = props;
  const getSize = () => {
    if (size === "sm") {
      return `w-24 h-6 text-base text-sm`;
    }
    if (size === "med") {
      return `w-48 h-12 text-base`;
    }
    if (size === "lg") {
      return `w-72 h-16 text-lg`;
    }
  };
  return (
    <button className={`${getSize()} rounded-lg border-red-500 border-2`}>
      {buttonText}
    </button>
  );
}
