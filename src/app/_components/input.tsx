import { ThemeContext } from "../_providers";
import { useContext } from "react";
import { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  error?: string | false;
  width: string;
  placeholder?: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  value: string;
  type?: string;
  name?: string;
};

export default function Input(props: InputProps) {
  const { appTheme } = useContext(ThemeContext);
  const {
    label,
    error,
    width,
    placeholder,
    value,
    onChange,
    onBlur,
    type,
    name,
  } = props;
  return (
    <div className={`flex flex-col w-${width} rounded-sm`}>
      <span className="text-base mb-1">{label && label}</span>
      <div className={`rounded w-full}`}>
        <input
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`outline-0 border-2 border-${appTheme}-${
            error ? `error` : `text`
          } pl-[6px] w-full rounded text-black focus:border-${appTheme}-secondary`}
          placeholder={placeholder && placeholder}
          type={type}
        />
      </div>
      <span className={`h-3.5 text-sm text-${appTheme}-error`}>
        {error ? error : ""}
      </span>
    </div>
  );
}
