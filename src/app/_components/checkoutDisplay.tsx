"use client";
import { CartContext, ThemeContext } from "../_providers";
import { useContext, useState } from "react";
import { Button } from ".";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";

export default function CheckoutDisplay() {
  const { cart, setCart, cartQuantity, setCartQuantity } =
    useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);
  const [shippingCost, setShippingCost] = useState(10);
  const [subTotal, setsubTotal] = useState(0);
  const getSubtotal = () => {
    let subtotal = 0;
    cart.map((c) => (subtotal = c.price * c.quantity + subtotal));
    return subtotal;
  };

  return (
    <>
      {cart.length > 0 ? (
        <div
          className={`flex flex-row border-${appTheme}-text border-2 rounded-lg h-full`}
        >
          <div className="w-3/4 bg-blue-500 rounded-l-lg">left</div>
          <div
            className={`w-1/4  bg-${appTheme}-bodyBg h-full flex flex-col justify-between rounded-r-lg border-l-2 border-${appTheme}-text`}
          >
            <div
              className={`flex border-b-2 border-${appTheme}-text rounded-tr-lg h-[10%] items-center text-4xl bg-${appTheme}-containerBg`}
            >
              <div className={`pl-6 ${lobsterFont.className} rounded-tr-lg  `}>
                Your Order
              </div>
            </div>
            <div className="h-[60%]">
              <div
                className={`pl-6 text-lg h-[10%] flex items-center border-b-2 border-${appTheme}-text`}
              >
                {`Order Details (${cartQuantity} item${
                  cartQuantity > 1 ? "s" : ""
                })`}
              </div>
              <div className="flex flex-col overflow-y-scroll h-[90%]">
                {cart.map((c, idx) => (
                  <div
                    className={`px-6 text-base flex min-h-[10%] flex-row justify-between items-center w-full`}
                    key={idx}
                  >
                    <div>{c.name}</div>
                    <div className=" min-w-[24px]">x {c.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex flex-col h-[30%] border-t-2 border-${appTheme}-text bg-${appTheme}-containerBg w-full gap-2 rounded-br-lg justify-center`}
            >
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Subtotal:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {getSubtotal()}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Shipping & Handling:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {shippingCost}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-lg justify-between pr-4">
                <div>Tax:</div>
                <div>
                  {currencyGen(cart[0].currency)}
                  {shippingCost}
                </div>
              </div>
              <div
                className={`${lobsterFont.className} text-2xl pl-6  w-full flex flex-row justify-between pr-4`}
              >
                <div>Order Total:</div>
                <div>
                  {currencyGen(cart[0].currency)}

                  {shippingCost}
                </div>
              </div>
              <div className="flex flex-row pl-6 text-xl justify-between pr-4">
                <Button
                  buttonText="Submit Order"
                  size="lg"
                  styleType="secondary"
                  onClick={() => console.log("click")}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Cart Empty"
      )}
    </>
  );
}
