import { getOrderById, getGuestOrderById } from "@/app/_utils/serverutils";
import { PageWrapper, ListHeader, Logo, OrderSummary } from "@/app/_components";

export default async function Page({
  params,
}: {
  params: { type: string; id: string };
}) {
  const { type, id } = params;
  const getOrder = async () => {
    if (type === "guest-order") {
      return await getGuestOrderById(id);
    } else return await getOrderById(id);
  };
  const order = await getOrder();

  return (
    <PageWrapper>
      <div className="w-full flex flex-row justify-center">
        <div className=" w-1/4">
          <Logo size="large" text="StefCo" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-8 pb-8">
        <ListHeader title={"Thank you for your order!"} />
      </div>
      <OrderSummary order={order} />
    </PageWrapper>
  );
}
