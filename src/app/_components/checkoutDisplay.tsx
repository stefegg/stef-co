"use client";
import { CartContext, ThemeContext } from "../_providers";
import { useContext } from "react";
import { Button } from ".";
import { lobsterFont } from "../fonts";

export default function CheckoutDisplay() {
  const { cart, setCart, setCartQuantity } = useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-row h-full border-${appTheme}-text border-2 rounded-lg`}
    >
      <div className="w-3/4 bg-blue-500 rounded-l-lg">left</div>
      <div
        className={`w-1/4 h-full bg-${appTheme}-bodyBgflex rounded-r-lg border-l-2 border-${appTheme}-text`}
      >
        <div
          className={`flex border-b-2 border-${appTheme}-text h-20 rounded-tr-lg items-center text-4xl bg-${appTheme}-containerBg`}
        >
          <div className={`pl-4 ${lobsterFont.className} rounded-tr-lg`}>
            Order Summary
          </div>
        </div>
        <div>Order Details</div>
        <div>Order Total</div>
      </div>
    </div>
  );
}
