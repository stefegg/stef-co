"use client";
import { CartContext, ThemeContext } from "../_providers";
import { useContext } from "react";
import { Button } from ".";
import { lobsterFont } from "../fonts";

export default function CheckoutDisplay() {
  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);

  const getSubtotal = () => {
    let subtotal = 0;
    cart.map((c) => (subtotal = c.price * c.quantity + subtotal));
    return subtotal;
  };

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
            Your Order
          </div>
        </div>
        <div>
          <div className={`pl-4 text-2xl pt-2 mb-6`}>
            {`Order Details (${cartQuantity} item${
              cartQuantity > 1 ? "s" : null
            })`}
          </div>
          <div className="gap-6 flex flex-col">
            {cart.map((c, idx) => (
              <div
                className={`px-6 text-xl flex flex-row justify-between w-full`}
                key={idx}
              >
                <div>{c.name}</div>
                <div>x {c.quantity}</div>
              </div>
            ))}
          </div>
        </div>
        <div>Order Total</div>
      </div>
    </div>
  );
}
