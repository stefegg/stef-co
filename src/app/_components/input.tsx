import { ThemeContext } from "../_providers";
import { useContext } from "react";

export default function Input() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col">
      <span className="text-sm">label</span>
      <div className="rounded-sm">
        <input
          className={`outline-0 border-0 pl-[6px] rounded-sm text-black`}
        />
      </div>
      <span className="h-3.5 text-sm">error</span>
    </div>
  );
}
