"use client";
import React from "react";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";

type HeaderMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderMenu(props: HeaderMenuProps) {
  const { setShowDrop } = props;
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row  w-[225px] border-2 rounded-md py-4 text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg`}
      onMouseLeave={() => setShowDrop(false)}
    >
      <div>Under Construction</div>
    </div>
  );
}
