import {
  ProductDisplayWrapper,
  LoadingSpinner,
  PageWrapper,
} from "@/app/_components";
import { Suspense } from "react";

export default async function Page({ params }: { params: { prodId: string } }) {
  const { prodId } = params;
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductDisplayWrapper id={prodId} />
      </Suspense>
    </PageWrapper>
  );
}
