"use client";
import { CleanOrder } from "../_types";
import { OrderListItem, ListHeader } from ".";
import { ThemeContext } from "../_providers";
import { useContext } from "react";
type OrderListProps = {
  orders: CleanOrder[];
};

export default function OrderList(props: OrderListProps) {
  const { appTheme } = useContext(ThemeContext);
  const { orders } = props;
  return (
    <div
      className={`w-full flex flex-col items-center sm:border-2 border-${appTheme}-border rounded-md min-h-[calc(100vh-6rem)] sm:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.3)] py-3`}
    >
      <ListHeader title="Your Orders" />
      <div className="w-full flex flex-col sm:px-12 gap-4 mt-4">
        {orders.map((x, idx) => (
          <OrderListItem key={idx} order={x} />
        ))}
      </div>
    </div>
  );
}
