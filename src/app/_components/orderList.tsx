import { CleanOrder } from "../_types";
import OrderListItem from "./orderListItem";

type OrderListProps = {
  orders: CleanOrder[];
};

export default function OrderList(props: OrderListProps) {
  const { orders } = props;
  return (
    <>
      {orders.map((x, idx) => (
        <OrderListItem key={idx} order={x} />
      ))}
    </>
  );
}
