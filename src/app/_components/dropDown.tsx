"use client";
import { useState, useContext } from "react";
import chevDown from "../../../public/icons/chevdown.svg";
import chevUp from "../../../public/icons/chevup.svg";
import Image from "next/image";
import { getFilter } from "../_utils";
import { ThemeContext } from "../_providers/theme-provider";

type DropdownProps = {
  title: string;
  options?: {
    title: string;
    setter: () => void;
  }[];
};

export default function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { appTheme } = useContext(ThemeContext);
  const { title, options } = props;

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const changeTheme = (setter: () => void) => {
    setter();
    setIsOpen(false);
  };

  const mouseOut = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="cursor-pointer flex flex-row gap-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer">{title}</div>
        <Image
          src={isOpen ? chevUp : chevDown}
          alt="chev"
          width={20}
          height={20}
          style={iconStyle}
        />
      </div>
      {isOpen && (
        <div
          className={`mt-2 w-36 rounded-lg absolute h-auto border-2 bg-${appTheme}-containerBg border-${appTheme}-border`}
          onMouseLeave={() => mouseOut()}
        >
          {options?.map((o, idx) => (
            <div
              key={idx}
              onClick={() => changeTheme(o.setter)}
              className={`flex flex-row p-4 items-center hover:bg-${appTheme}-containerHover rounded-lg cursor-pointer`}
            >
              {o.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
