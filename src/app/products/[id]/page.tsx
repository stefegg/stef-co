import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay, LoadingSpinner, PageWrapper } from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <PageWrapper>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <ProductDisplay product={product} />
      {/* </Suspense> */}
    </PageWrapper>
  );
}
