"use client";
import { ThemeContext, CartContext } from "../_providers";
import { useContext, useState } from "react";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";
import Image from "next/image";
import trashCan from "../../../public/icons/trash.svg";
import { getFilter } from "../_utils";

export default function Cart() {
  const { appTheme } = useContext(ThemeContext);
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext);
  const [filterHover, setFilterHover] = useState(false);
  const getTranslate = () => {
    if (showCart === false) {
      return `translate-x-full`;
    } else return null;
  };

  const iconStyle = () => {
    if (filterHover === false) {
      return { filter: getFilter(appTheme) };
    } else {
      return {
        filter:
          "invert(18%) sepia(29%) saturate(7013%) hue-rotate(347deg) brightness(102%) contrast(121%)",
      };
    }
  };

  return (
    <div
      className={`text-${appTheme}-text bg-${appTheme}-containerBg border-${appTheme}-text absolute border-l-2 min-h-[calc(100vh-4rem)] w-1/4 top-16 right-0 ${getTranslate()} transition duration-500 p-4 overflow-y-scroll`}
    >
      <div
        className={`${lobsterFont.className} text-5xl border-b-2 border-${appTheme}-border mb-8`}
      >
        Shopping Cart
      </div>
      {cart.length > 0 ? (
        cart.map((cartItem, idx) => (
          <div key={idx} className="flex flex-col w-full gap-2 mt-8 pl-2">
            <div className="text-xl flex flex-row justify-between w-full">
              <div>{cartItem.name}</div>
              <div className="text-lg flex flex-row items-center gap-2">
                <div>x{cartItem.quantity}</div>
                <div className={`cursor-pointer`}>
                  <Image
                    src={trashCan}
                    alt="delete"
                    height={20}
                    width={20}
                    style={iconStyle()}
                    onMouseEnter={() => setFilterHover(true)}
                    onMouseLeave={() => setFilterHover(false)}
                  />
                </div>
              </div>
            </div>
            <div className="ml-auto text-lg pr-4">
              {currencyGen(cartItem.currency)}
              {cartItem.price * cartItem.quantity}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-row justify-center w-full text-lg">
          Your cart is empty
        </div>
      )}
    </div>
  );
}
