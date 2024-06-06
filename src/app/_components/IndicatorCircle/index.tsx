"use client";
import { CartContext, ThemeContext } from "../../_providers/index";
import { useContext } from "react";

type IndicatorCircleProps = {
  type: "cart" | "wishlist";
};

export default function IndicatorCircle(props: IndicatorCircleProps) {
  const { type } = props;
  const { wishlist, cartQuantity } = useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);
  const getDisplay = () => {
    if (type == "cart") {
      return `${cartQuantity}`;
    }
    if (type === "wishlist" && wishlist && wishlist.length > 0) {
      return wishlist?.length;
    }
  };
  return (
    <div
      className={`bg-${appTheme}-border text-${appTheme}-text w-[18px] h-[18px] rounded-full text-xs flex items-center justify-center p-2`}
    >
      {getDisplay()}
    </div>
  );
}
