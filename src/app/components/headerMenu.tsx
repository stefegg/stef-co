"use client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";

export function HeaderMenu() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  return (
    <div
      className={`border-2 rounded-md py-4 ${
        appTheme === "Light" ? "border-red-500" : "border-blue-500"
      }`}
    >
      <div>
        {appTheme} Theme
        <label className="relative inline-block w-[60px] height-[34px]">
          <input
            className="h-0 w-0 opacity-0 transform peer  checked:bg-blue-500"
            type="checkbox"
            onChange={() =>
              setAppTheme(appTheme === "Light" ? "Dark" : "Light")
            }
          />
          <span className="block before:block before:rounded-xl h-[26px] bg-red-500 absolute before:absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-500 before:h-[26px] before:w-[26px] before:left-[4px] before:duration-500 before:bg-white peer-checked:bg-blue-500 before:peer-checked:translate-x-[26px] rounded-xl" />
        </label>
      </div>
    </div>
  );
}
