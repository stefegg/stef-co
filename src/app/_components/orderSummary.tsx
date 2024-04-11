"use client";
import { ThemeContext } from "../_providers";
import { useContext } from "react";
import { CleanOrder, CleanGuestOrder } from "../_types";

type OrderSummaryProps = {
  order: CleanOrder | CleanGuestOrder;
  type: string;
};

export default function OrderSummary(props: OrderSummaryProps) {
  const { appTheme } = useContext(ThemeContext);
  const { order, type } = props;

  const getEmail = () => {
    if ("user" in order) {
      return order.user.email;
    }
    if ("email" in order) {
      return order.email;
    }
  };

  return (
    <div className="w-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.5)] rounded-md">
      <div
        className={`text-xl bg-${appTheme}-containerBg p-2 rounded-t-md flex flex-row justify-between`}
      >
        <div>{`Order Id: ${order.id}`}</div>
        <div>Email: {getEmail()}</div>
      </div>
      <div className="p-2 gap-4">
        <div className="text-xl">Order Items:</div>
      </div>
    </div>
  );
}
