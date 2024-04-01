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
};

export default function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { appTheme } = useContext(ThemeContext);
  const { title, options, stateSelect } = props;

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
    <>
      <div
        className="cursor-pointer flex flex-row gap-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer text-sm">
          <div className="mb-1">{title}</div>
          {stateSelect && (
            <div className={`border-2 border-${appTheme}-text w-24 rounded-sm`}>
              Nj
            </div>
          )}
        </div>
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
          className={`mt-2 w-36 z-40 rounded-lg absolute h-auto border-2 bg-${appTheme}-containerBg border-${appTheme}-border`}
          onMouseLeave={() => mouseOut()}
        >
          {options?.map((o, idx) => (
            <div
              key={idx}
              onClick={() => clickItem(o.setter)}
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
