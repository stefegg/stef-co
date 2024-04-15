import { CleanOrder } from "../_types";

type OrderListItemProps = {
  order: CleanOrder;
};

export default function OrderListItem(props: OrderListItemProps) {
  const { order } = props;
  console.log(order, "test-------");
  return <div>hi</div>;
}
