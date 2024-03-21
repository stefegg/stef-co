import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";

export default function ToggleSwitch() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  return (
    <label className="relative inline-block w-[60px] height-[34px]">
      <input
        className="h-0 w-0 opacity-0 transform peer"
        type="checkbox"
        onChange={() =>
          setAppTheme(appTheme === "Classic" ? "Dark" : "Classic")
        }
      />
      <span
        className="block h-[26px] bg-slate-700 absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-500 rounded-xl bg-charcoal
    before:block before:rounded-xl before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:duration-500 before:bg-green 
    peer-checked:bg-newNavy before:peer-checked:translate-x-[26px] before:peer-checked:bg-yellow"
      />
    </label>
  );
}
