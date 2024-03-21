import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";

type ToggleSwitchProps = {
  state: boolean;
  setState: (state: boolean) => void;
};

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { state, setState } = props;
  const { appTheme } = useContext(ThemeContext);

  const getStyles = () => {
    if (appTheme === "Classic") {
      return `bg-navy before:bg-yellow`;
    }
    if (appTheme === "Dark") {
      return `bg-charcoal before:bg-green`;
    }
  };

  return (
    <label className="relative inline-block w-[60px] height-[34px]">
      <input
        className="h-0 w-0 opacity-0 transform peer"
        type="checkbox"
        onChange={() => setState(!state)}
      />
      <span
        className={`block h-[26px] bg-slate-700 absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-500 rounded-xl 
    before:block before:rounded-xl before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:duration-500 
     before:peer-checked:translate-x-[26px] ${getStyles()}`}
      />
    </label>
  );
}

// before:peer-checked:bg-yellow
// peer-checked:bg-newNavy
// bg-charcoal
// before:bg-green
