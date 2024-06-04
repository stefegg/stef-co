import { ThemeContext } from "../_providers";
import { useContext } from "react";

export default function LandingModal() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full md:w-1/2 h-1/2 bg-${appTheme}-bodyBg text-${appTheme}-text rounded-lg flex-col items-center p-4 lg:p-10 text-lg justify-evenly border-2 border-${appTheme}-text`}
    >
      <div className="text-sm md:text-base lg:text-lg">
        Hello! Welcome to StefCo. This is not an actual storefront, this is my
        software engineering portfolio site. To get started with everything,
        click a product and go from there. Or check out some of the items in the
        sidebar / header. You do not need to register an account to place an
        order, but you are welcome to do so if you would like.
      </div>

      <div
        className={`text-lg md:text-xl bg-${appTheme}-containerBg border-${appTheme}-secondary border-2 h-16 flex items-center rounded-lg px-4`}
      >
        Click anywhere to start!
      </div>
    </div>
  );
}
