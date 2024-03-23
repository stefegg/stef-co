"use client";
import { CartContext } from "../_providers/cart-provider";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type IndicatorCircleProps = {
  type: "cart" | "wishlist";
};

export default function IndicatorCircle(props: IndicatorCircleProps) {
  const { type } = props;
  const { cart, wishlist } = useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`bg-${appTheme}-border text-${appTheme}-text w-[18px] h-[18px] rounded-full text-xs flex items-center justify-center p-2`}
    >
      {type === "cart" ? cart.length : wishlist.length}
    </div>
  );
}
