import { CleanOrder } from "../../_types";
import Link from "next/link";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { format } from "date-fns";
import { currencyGen } from "../../_utils";

type OrderListItemProps = {
  order: CleanOrder;
};

export default function OrderListItem(props: OrderListItemProps) {
  const { order } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full text-sm sm:text-base border-2 border-${appTheme}-text rounded-lg  hover:bg-${appTheme}-containerBg hover:border-${appTheme}-secondary shadow-[0px_0px_3px_3px_rgba(0,0,0,0.3)]`}
    >
      <Link
        className="flex flex-row justify-between w-full h-full py-4 px-2"
        href={`my-orders/${order.id}`}
      >
        <div className="w-1/3 sm:pl-4">{`Placed On: ${format(
          order.createdAt,
          "MM/dd/yyyy"
        )}`}</div>
        <div className="w-1/3">{`Order No: ${order.id}`}</div>
        <div className="w-1/3">
          <div className="w-1/2 ml-auto">
            {`Order Total: ${currencyGen(order.orderItems[0].currency)} ${
              order.orderTotal
            }`}
          </div>
        </div>
      </Link>
    </div>
  );
}
