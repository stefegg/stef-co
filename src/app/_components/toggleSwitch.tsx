import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type ToggleSwitchProps = {
  state: boolean;
  setState: (state: boolean) => void;
};

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { state, setState } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <label className="relative inline-block w-[60px] height-[34px]">
      <input
        className="h-0 w-0 opacity-0 transform peer"
        type="checkbox"
        onChange={() => setState(!state)}
      />
      <span
        className={`block h-[24px] absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-500 rounded-xl 
    before:block before:rounded-xl before:absolute before:h-[24px] before:w-[24px] before:left-[4px] before:duration-500 
     before:peer-checked:translate-x-[24px] bg-${appTheme}-containerBg before:bg-${appTheme}-text`}
      />
    </label>
  );
}
