"use client";
import React from "react";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { themeGen } from "../_utils";
import { ToggleSwitch } from "./index";

type HeaderMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderMenu(props: HeaderMenuProps) {
  const { setShowDrop } = props;
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row  w-[225px] border-2 rounded-md py-4 ${themeGen(
        appTheme
      )}`}
      onMouseLeave={() => setShowDrop(false)}
    >
      <div className="flex flex-row gap-2 px-2 min-w-[150px]">
        {appTheme} Theme
      </div>
      <div>
        Under Construction
        {/* <ToggleSwitch /> */}
      </div>
    </div>
  );
}
