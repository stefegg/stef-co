import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay, LoadingSpinner, PageWrapper } from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);
  const cleanedProduct = JSON.parse(JSON.stringify(product));
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDisplay product={cleanedProduct} />
      </Suspense>
    </PageWrapper>
  );
}
