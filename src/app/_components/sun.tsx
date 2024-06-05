"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../_providers/index";

export default function Sun() {
  const [check, setCheck] = useState(true);
  const { appTheme } = useContext(ThemeContext);
  const getColor = () => {
    if (check === true) {
      return "sunSecondary";
    }
    return "sunTertiary";
  };
  const getOtherColor = () => {
    if (check === true) {
      return "sunTertiary";
    }
    return "sunSecondary";
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCheck((check) => !check);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-[250px] relative pt-8">
      <div
        className={`w-0 h-0 
        border-l-[36px] border-l-transparent
        border-b-[48px] border-b-${appTheme}-${getColor()}
        border-r-[36px] border-r-transparent absolute -right-10 top-20 rotate-[64deg] z-10`}
      />
      <div
        className={`w-0 h-0 
        border-l-[36px] border-l-transparent
        border-b-[48px] border-b-${appTheme}-${getOtherColor()}
        border-r-[36px] border-r-transparent absolute right-2 top-4 rotate-[36deg] z-10`}
      />

      <div
        className={`w-0 h-0 
        border-l-[36px] border-l-transparent
        border-b-[48px] border-b-${appTheme}-${getColor()}
        border-r-[36px] border-r-transparent absolute right-[90px] -top-2 rotate-[0deg] z-10`}
      />
      <div
        className={`w-0 h-0 
        border-l-[36px] border-l-transparent
        border-b-[48px] border-b-${appTheme}-${getOtherColor()}
        border-r-[36px] border-r-transparent absolute left-2 top-4 rotate-[324deg] z-10`}
      />
      <div
        className={`w-0 h-0 
        border-l-[36px] border-l-transparent
        border-b-[48px] border-b-${appTheme}-${getColor()}
        border-r-[36px] border-r-transparent absolute -left-10 top-20 rotate-[296deg] z-10`}
      />
      <div
        className={`bg-${appTheme}-sunPrimary h-32 rounded-t-[150px]  z-20 relative`}
      />
    </div>
  );
}
