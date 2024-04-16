"use client";
import { CartContext, ThemeContext } from "../_providers";
import { useContext } from "react";
import { Button } from ".";
import { lobsterFont } from "../fonts";
import { currencyGen } from "../_utils";
import { FormEvent } from "react";

type CheckoutDetailsProps = {
  submit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  subTotal: string;
  salesTax: string;
  shippingCost: string;
  orderTotal: string;
};

export default function CheckoutDetails(props: CheckoutDetailsProps) {
  const { submit, subTotal, salesTax, shippingCost, orderTotal } = props;
  const { appTheme } = useContext(ThemeContext);
  const { cart, cartQuantity } = useContext(CartContext);

  return (
    <div
      className={`w-1/3 bg-${appTheme}-bodyBg h-full flex flex-col rounded-lg shadow-[0px_0px_5px_5px_rgba(0,0,0,0.5)]`}
    >
      <div
        className={`flex border-b-2 border-${appTheme}-text rounded-t-lg h-16 items-center text-4xl bg-${appTheme}-containerBg ${lobsterFont.className} pl-6 py-4 `}
      >
        Your Order
      </div>
      <div className="h-2/3">
        <div className={`pl-6 pt-2 text-lg h-10 flex items-center`}>
          {`Order Details (${cartQuantity} item${cartQuantity > 1 ? "s" : ""})`}
        </div>
        <div className="flex flex-col overflow-y-scroll min-h-72 pt-2 pb-4 gap-2">
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
        className={`flex flex-col h-72 py-4 border-t-2 border-${appTheme}-text bg-${appTheme}-containerBg w-full gap-2 rounded-b-lg justify-center`}
      >
        <div className="flex flex-row pl-6 text-lg justify-between pr-4">
          <div>Subtotal:</div>
          <div>
            {currencyGen(cart[0].currency)}
            {subTotal}
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
            {salesTax}
          </div>
        </div>
        <div
          className={`${lobsterFont.className} text-2xl pl-6  w-full flex flex-row justify-between pr-4`}
        >
          <div>Order Total:</div>
          <div>
            {currencyGen(cart[0].currency)}
            {orderTotal}
          </div>
        </div>
        <div className="flex flex-row text-xl justify-center w-full px-6">
          <Button
            type="submit"
            buttonText="Submit Order"
            size="xl"
            styleType="secondary"
            onClick={submit}
          />
        </div>
      </div>
    </div>
  );
}
