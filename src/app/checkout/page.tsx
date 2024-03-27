import { PageWrapper, ListHeader, CheckoutDisplay } from "../_components";

export default function Checkout() {
  return (
    <PageWrapper>
      <div className={`flex flex-col h-full pb-6`}>
        <div className="mb-2">
          <ListHeader title={"Checkout"} />
        </div>
        <CheckoutDisplay />
      </div>
    </PageWrapper>
  );
}
