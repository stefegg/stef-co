"use client";
import { ThemeContext, CartContext } from "../_providers";
import { useContext } from "react";

export default function Cart() {
  const { appTheme } = useContext(ThemeContext);
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext);
  const getTranslate = () => {
    if (showCart === false) {
      return `translate-x-full`;
    } else return null;
  };
  return (
    <div
      className={`absolute bg-white border-red-500 min-h-[calc(100vh-4rem)]  w-1/4 top-16 right-0 ${getTranslate()} transition duration-500`}
    >
      Hello
    </div>
  );
}
