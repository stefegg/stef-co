import { ThemeContext } from "../_providers";
import { useContext } from "react";

type InputProps = {
  label?: string;
  error?: string;
  width: string;
  placeholder?: string;
};

export default function Input(props: InputProps) {
  const { appTheme } = useContext(ThemeContext);
  const { label, error, width, placeholder } = props;
  console.log(width, "------w");
  return (
    <div className={`flex flex-col gap-1 w-${width}`}>
      <span className="text-sm">{label && label}</span>
      <div className={`rounded-sm pl-1 w-full`}>
        <input
          className={`outline-0 border-0 pl-[6px] w-full rounded-sm text-black`}
          placeholder={placeholder && placeholder}
        />
      </div>
      <span className="h-3.5 text-sm">{error ? error : "error"}</span>
    </div>
  );
}
