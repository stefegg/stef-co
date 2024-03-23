import { ThemeContext } from "../_providers/theme-provider";
import { BannerContext } from "../_providers/banner-provider";
import { useContext } from "react";

export default function IndicatorBanner() {
  const { appTheme } = useContext(ThemeContext);
  const { opacity, title } = useContext(BannerContext);
  return (
    <div
      className={`w-full absolute top-16 bg-${appTheme}-text text-${appTheme}-border flex justify-center p-1 transition-opacity duration-500 opacity-${opacity}`}
    >
      Added to {title}
    </div>
  );
}
