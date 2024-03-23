"use client";
import { CartContext, ThemeContext } from "../_providers/index";
import { useContext } from "react";

type IndicatorCircleProps = {
  type: "cart" | "wishlist";
};

export default function IndicatorCircle(props: IndicatorCircleProps) {
  const { type } = props;
  const { wishlist, cartQuantity } = useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`bg-${appTheme}-border text-${appTheme}-text w-[18px] h-[18px] rounded-full text-xs flex items-center justify-center p-2`}
    >
      {type === "cart" ? `${cartQuantity}` : wishlist.length}
    </div>
  );
}
