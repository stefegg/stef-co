"use client";
import { ThemeContext, CartContext } from "../_providers";
import { useContext } from "react";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";

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
      className={`text-${appTheme}-text bg-${appTheme}-containerBg border-${appTheme}-text absolute border-l-2 min-h-[calc(100vh-4rem)] w-1/4 top-16 right-0 ${getTranslate()} transition duration-500 p-4 `}
    >
      <div
        className={`${lobsterFont.className} text-5xl border-b-2 border-${appTheme}-border mb-8`}
      >
        Shopping Cart
      </div>
      {cart.length > 0 ? (
        cart.map((cartItem, idx) => (
          <div key={idx} className="flex flex-col w-full gap-2 mt-8 px-2">
            <div className="text-xl flex flex-row justify-between w-full">
              <div>{cartItem.name}</div>
              <div className="text-lg">x{cartItem.quantity}</div>
            </div>
            <div className="ml-auto text-lg">
              {currencyGen(cartItem.currency)}
              {cartItem.price * cartItem.quantity}
            </div>
          </div>
        ))
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}
