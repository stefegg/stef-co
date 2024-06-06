import { ThemeContext, BannerContext } from "../../_providers/index";
import { useContext } from "react";

export default function IndicatorBanner() {
  const { appTheme } = useContext(ThemeContext);
  const { opacity, type, operation } = useContext(BannerContext);

  const getZ = () => {
    if (opacity === "100") {
      return "10";
    } else return "0";
  };

  return (
    <div
      className={`w-full z-${getZ()} absolute top-16 bg-${appTheme}-text text-${appTheme}-border flex justify-center p-1 transition-opacity duration-500 opacity-${opacity} cursor-pointer `}
    >
      {operation}
      {type}
    </div>
  );
}
