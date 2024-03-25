import { ThemeContext, BannerContext } from "../_providers/index";
import { useContext } from "react";

export default function IndicatorBanner() {
  const { appTheme } = useContext(ThemeContext);
  const { opacity, type, operation } = useContext(BannerContext);
  return (
    <div
      className={`w-full z-10 absolute top-16 bg-${appTheme}-text text-${appTheme}-border flex justify-center p-1 transition-opacity duration-500 opacity-${opacity}`}
    >
      {operation}
      {type}
    </div>
  );
}
