import { CleanOrder } from "../_types";

type OrderListItemProps = {
  order: CleanOrder;
};

export default function OrderListItem(props: OrderListItemProps) {
  const { order } = props;
  return <div>{order.id}</div>;
}
