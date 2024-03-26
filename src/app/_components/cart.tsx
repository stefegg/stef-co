"use client";
import { ThemeContext, CartContext } from "../_providers";
import { useContext } from "react";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";
import Image from "next/image";
import trashCan from "../../../public/icons/trash.svg";
import { getFilter } from "../_utils";
import { CartItem } from "../_types";
import { Button } from ".";

export default function Cart() {
  const { appTheme } = useContext(ThemeContext);
  const { cart, showCart, setShowCart, cartQuantity, setCartQuantity } =
    useContext(CartContext);

  const getTranslate = () => {
    if (showCart === false) {
      return `translate-x-full`;
    } else return null;
  };

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const removeUpdateCount = (
    cart: CartItem[],
    idx: number,
    quantity: number
  ) => {
    cart.splice(idx, 1);
    setCartQuantity(cartQuantity - quantity);
  };

  const removeCartItem = (cartItem: CartItem) => {
    cart.map((c, idx) =>
      c.prodId === cartItem.prodId
        ? removeUpdateCount(cart, idx, c.quantity)
        : null
    );
  };

  const getSubtotal = () => {
    let subtotal = 0;
    cart.map((c) => (subtotal = c.price * c.quantity + subtotal));
    return subtotal;
  };
  return (
    <div
      className={`text-${appTheme}-text bg-${appTheme}-containerBg border-${appTheme}-text absolute border-l-2 min-h-[calc(100vh-4rem)] w-1/4 top-16 right-0 ${getTranslate()} transition duration-500 p-4 overflow-y-scroll z-30`}
    >
      <div
        className={`${lobsterFont.className} text-5xl border-b-2 border-${appTheme}-border max-h-24`}
      >
        Shopping Cart
      </div>
      <div className="max-h-[64vh] overflow-scroll">
        {cart.length > 0 ? (
          cart.map((cartItem, idx) => (
            <div
              key={idx}
              className={`flex flex-col w-full gap-2 mt-8 pl-2 bg-${appTheme}-bodyBg rounded-lg py-2`}
            >
              <div className="text-3xl flex flex-row justify-between w-full ">
                <div className={lobsterFont.className}>{cartItem.name}</div>
                <div className="text-lg grid grid-cols-2 gap-2 mr-2">
                  <div>
                    <div className="flex justify-end">x{cartItem.quantity}</div>
                    <div className="ml-auto text-lg ">
                      {currencyGen(cartItem.currency)}
                      {cartItem.price * cartItem.quantity}
                    </div>
                  </div>
                  <div
                    className={`cursor-pointer flex flex-col items-center py-1`}
                  >
                    <Image
                      src={trashCan}
                      alt="delete"
                      height={20}
                      width={20}
                      style={iconStyle}
                      onClick={() => removeCartItem(cartItem)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-row w-full text-lg pl-2">
            Your cart is empty
          </div>
        )}
      </div>
      <div className="absolute flex flex-col w-full pr-6 ml-1 bottom-0 max-h-[24vh] mb-8">
        <div
          className={`text-4xl ${lobsterFont.className} mt-8 flex flex-row justify-between pr-4 pl-1 `}
        >
          <div>Subtotal</div>
          <div>
            {currencyGen(cart[0].currency)}
            {getSubtotal()}
          </div>
        </div>
        <div className="flex flex-row justify-center w-full pt-4 pr-2">
          <Button
            buttonText="Checkout"
            styleType="secondary"
            onClick={() => setShowCart(false)}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
