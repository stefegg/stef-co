"use client";
import { ThemeContext } from "../_providers";
import { useContext } from "react";
import { CleanOrder, CleanGuestOrder } from "../_types";
import { currencyGen } from "../_utils";
import Image from "next/image";
import { format } from "date-fns";

type OrderSummaryProps = {
  order: CleanOrder | CleanGuestOrder;
  type?: string;
};

export default function OrderSummary(props: OrderSummaryProps) {
  const { appTheme } = useContext(ThemeContext);
  const { order, type } = props;
  const { orderItems, orderAddress } = order;
  const getEmail = () => {
    if ("user" in order) {
      return order.user.email;
    }
    if ("email" in order) {
      return order.email;
    }
  };

  const getShipTime = () => {
    if (order.shipMethod === "Ground") {
      return "2-3 business days";
    }
    if (order.shipMethod === "Air") {
      return "1-2 business days";
    }
    if (order.shipMethod === "Space") {
      return "6-8 business hours";
    }
  };

  return (
    <div className="w-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.5)] rounded-md overflow-scroll">
      <span
        className={`text-xl bg-${appTheme}-containerBg p-4 rounded-t-md flex flex-row justify-between`}
      >
        <div className="flex flex-col gap-2">
          <div>{`Order No.: ${order.id}`}</div>
          <div>{`Created: ${format(
            order.createdAt,
            "MM/dd/yyyy, hh:mm:ss a"
          )}`}</div>
        </div>
        <div>Email: {getEmail()}</div>
      </span>
      <div className={`p-2 flex flex-row gap-8 text-xl justify-evenly pt-4`}>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Shipping Address:</div>
          <div className="flex flex-row gap-2">
            <div>{orderAddress.firstName}</div>
            <div>{orderAddress.lastName}</div>
          </div>
          <div>{orderAddress.addressOne}</div>
          <div className="flex flex-row gap-2">
            <div>{orderAddress.city}</div>
            <div>{orderAddress.state}</div>
            <div>{orderAddress.zipCode}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Billing Address:</div>
          <div className="flex flex-row gap-2">
            <div>{orderAddress.firstName}</div>
            <div>{orderAddress.lastName}</div>
          </div>
          <div>{orderAddress.addressOne}</div>
          <div className="flex flex-row gap-2">
            <div>{orderAddress.city}</div>
            <div>{orderAddress.state}</div>
            <div>{orderAddress.zipCode}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Shipping Method:</div>
          <div>{order.shipMethod}</div>
          <div>{getShipTime()}</div>
          <div>Ship Status: {order.shippingStatus}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Cost Summary:</div>
          <div className="flex flex-row justify-between">
            <div>Subtotal: </div>
            <div className="pl-6">
              {currencyGen(orderItems[0].currency)}
              {order.subTotal}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Tax:</div>
            <div>
              {currencyGen(orderItems[0].currency)}
              {order.orderTax}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Shipping:</div>
            <div>
              {currencyGen(orderItems[0].currency)}
              {order.shippingCost}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Total:</div>
            <div className="pl-2">
              {currencyGen(orderItems[0].currency)}
              {order.orderTotal}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 gap-4">
        <div className="text-2xl pb-2 font-bold">Order Items:</div>
        {orderItems.map((x, idx) => (
          <div
            key={idx}
            className={`w-full rounded-md border border-${appTheme}-border p-2 h-40 flex flex-row mb-2`}
          >
            <div className={`bg-${appTheme}-text w-40 rounded-md h-full`}>
              image placeholder
              {/* <Image
                width={0}
                height={0}
                style={{ width: "10%", height: "100%" }}
                quality={100}
                unoptimized
                alt="imageUrl"
                src={x.imageUrl || ""}
              /> */}
            </div>
            <div className="flex flex-col w-full justify-between py-4">
              <div className="flex flex-row justify-between ">
                <div className={`text-xl px-6 font-bold`}>{x.name}</div>
                <div className={`text-xl px-6`}>Quantity: {x.quantity}</div>
              </div>
              <div className="flex flex-row justify-between ">
                <div className={`text-xl px-6`}>
                  Price: {currencyGen(x.currency)}
                  {x.price} each
                </div>
                <div className={`text-xl px-6`}>
                  Total: {currencyGen(x.currency)}
                  {x.quantity * x.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
