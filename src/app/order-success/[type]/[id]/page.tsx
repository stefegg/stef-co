import { getOrderById, getGuestOrderById } from "@/app/_utils/serverutils";
import {
  PageWrapper,
  ListHeader,
  Logo,
  LoadingSpinner,
  OrderSummary,
} from "@/app/_components";
import { Suspense } from "react";

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
          <Logo size="large" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-8 pb-8">
        <ListHeader title={"Thank you for your order!"} />
      </div>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <OrderSummary order={order} type={type} />
      {/* </Suspense> */}
    </PageWrapper>
  );
}
