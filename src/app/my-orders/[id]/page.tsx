import { OrderSummary, PageWrapper, ListHeader } from "@/app/_components";
import { getOrderById } from "@/app/_utils/serverutils";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const order = await getOrderById(id);
  return (
    <PageWrapper>
      <div className="w-full flex justify-center mb-6">
        <ListHeader title="Order Summary" />
      </div>
      <OrderSummary order={order} />
    </PageWrapper>
  );
}
