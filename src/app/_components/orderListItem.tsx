import { CleanOrder } from "../_types";
import Link from "next/link";

type OrderListItemProps = {
  order: CleanOrder;
};

export default function OrderListItem(props: OrderListItemProps) {
  const { order } = props;
  return (
    <div>
      <Link href={`my-orders/${order.id}`}>{order.id}</Link>
    </div>
  );
}
