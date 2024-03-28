import { ThemeContext } from "../_providers";
import { useContext } from "react";

export default function Input() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div>
      <span></span>
      <div>
        <input />
      </div>
      <span></span>
    </div>
  );
}
