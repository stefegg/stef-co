"use client";
import { useState, useContext } from "react";
import chevDown from "../../../public/icons/chevdown.svg";
import chevUp from "../../../public/icons/chevup.svg";
import Image from "next/image";
import { getFilter } from "../_utils";
import { ThemeContext } from "../_providers/index";

type DropdownProps = {
  title: string;
  options?: {
    title: string;
    setter: () => void;
  }[];
  stateSelect?: boolean;
  value?: string;
  error?: string | false;
};

export default function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { appTheme } = useContext(ThemeContext);
  const { title, options, stateSelect, value, error } = props;

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const clickItem = (setter: () => void) => {
    setter();
    setIsOpen(false);
  };

  const mouseOut = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex flex-row gap-2 mt-2 sm:mt-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer text-sm sm:text-base">
          <div className="sm:mb-1">{title}</div>
          {stateSelect && (
            <>
              <div
                className={`border-2 border-${appTheme}-${
                  error ? "error" : "text"
                } w-24 rounded text-black bg-white pl-1 h-[28px]`}
              >
                {value}
              </div>
              <span
                className={`h-3.5 text-sm text-${appTheme}-${
                  error ? "error" : "bodyBg"
                }`}
              >
                {error ? error : "x"}
              </span>
            </>
          )}
        </div>
        <div
          className={`flex ${stateSelect ? "items-center" : "items-end"} pb-1`}
        >
          <Image
            src={isOpen ? chevUp : chevDown}
            alt="chev"
            width={20}
            height={20}
            style={iconStyle}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`w-36 z-40 rounded-lg absolute h-auto max-h-32 overflow-auto border-2 bg-${appTheme}-containerBg border-${appTheme}-border ${
            stateSelect ? `top-16` : `mt-2`
          }`}
          onMouseLeave={() => mouseOut()}
        >
          {options?.map((o, idx) => (
            <div
              key={idx}
              onClick={() => clickItem(o.setter)}
              className={`flex flex-row p-2 items-center hover:bg-${appTheme}-containerHover rounded-lg cursor-pointer`}
            >
              {o.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
