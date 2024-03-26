import { ThemeContext, BannerContext } from "../_providers/index";
import { useContext } from "react";

export default function IndicatorBanner() {
  const { appTheme } = useContext(ThemeContext);
  const { opacity, type, operation } = useContext(BannerContext);
  const getHeight = () => {
    if (opacity === "100") {
      return "8";
    } else return "0";
  };
  const getPadding = () => {
    if (opacity === "100") {
      return "1";
    } else return "0";
  };
  const getText = () => {
    if (opacity === "100") {
      return "border";
    } else return "bodyBg";
  };
  return (
    <div
      className={`w-full z-10 absolute top-16 bg-${appTheme}-text text-${appTheme}-${getText()} flex justify-center p-${getPadding()} transition-opacity duration-500 opacity-${opacity} cursor-pointer h-${getHeight()}`}
    >
      {operation}
      {type}
    </div>
  );
}
