import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay, LoadingSpinner, PageWrapper } from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { prodId: string } }) {
  const { prodId } = params;
  const product = await getProductById(prodId);
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDisplay product={product} />
      </Suspense>
    </PageWrapper>
  );
}
