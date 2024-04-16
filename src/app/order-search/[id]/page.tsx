import { getGuestOrderById } from "@/app/_utils/serverutils";
import { PageWrapper, ListHeader, OrderSummary } from "@/app/_components";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const order = await getGuestOrderById(id);
  const cleanOrder = JSON.parse(JSON.stringify(order));
  return (
    <PageWrapper>
      {order ? (
        <>
          <div className="w-full flex justify-center mb-6">
            <ListHeader title="Order Summary" />
          </div>
          <OrderSummary order={cleanOrder} />
        </>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="mb-6">
            <ListHeader title="Order Not Found" />
          </div>
          <div>Order not found, please check your order number.</div>
        </div>
      )}
    </PageWrapper>
  );
}
