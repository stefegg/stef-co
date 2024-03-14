"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";

type HeaderMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
};

export function HeaderMenu(props: HeaderMenuProps) {
  const { setShowDrop } = props;
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row  w-[185px] border-2 rounded-md py-4 ${
        appTheme === "Classic"
          ? "border-black bg-white"
          : "border-white bg-black text-white"
      }`}
      onMouseLeave={() => setShowDrop(false)}
    >
      <div className="flex flex-row gap-2 px-2">
        {appTheme} Theme
        <label className="relative inline-block w-[60px] height-[34px]">
          <input
            className="h-0 w-0 opacity-0 transform peer"
            type="checkbox"
            onChange={() =>
              setAppTheme(appTheme === "Classic" ? "Dark" : "Classic")
            }
          />
          <span
            className="block h-[26px] bg-slate-700 absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-500 rounded-xl bg-eggWhite
          before:block before:rounded-xl before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:duration-500 before:bg-yellow 
          peer-checked:bg-eggWhite before:peer-checked:translate-x-[26px] before:peer-checked:bg-newNavy"
          />
        </label>
      </div>
    </div>
  );
}
