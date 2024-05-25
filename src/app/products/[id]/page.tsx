import { getProductById } from "@/app/_utils/serverutils";
import {
  ProductDisplayWrapper,
  LoadingSpinner,
  PageWrapper,
} from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDisplayWrapper id={id} />
      </Suspense>
    </PageWrapper>
  );
}
