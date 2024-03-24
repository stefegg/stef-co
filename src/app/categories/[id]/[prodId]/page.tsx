import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay, LoadingSpinner } from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { prodId: string } }) {
  const { prodId } = params;
  const product = await getProductById(prodId);
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDisplay product={product} />
      </Suspense>
    </>
  );
}
