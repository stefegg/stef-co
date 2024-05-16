import { PageWrapper } from "../_components";
import { getServerSession } from "next-auth";
import { getOrdersByUserId } from "../_utils/serverutils";
import { redirect } from "next/navigation";
import { OrderList } from "../_components";

export default async function Page() {
  const getSessionUserOrders = async () => {
    const session = await getServerSession();
    if (session && session.user && session.user.name) {
      return await getOrdersByUserId(session.user?.name);
    } else {
      redirect("/order-search");
    }
  };

  const sessionOrders = await getSessionUserOrders();
  return (
    <PageWrapper>
      <div>{sessionOrders ? <OrderList orders={sessionOrders} /> : null}</div>
    </PageWrapper>
  );
}
