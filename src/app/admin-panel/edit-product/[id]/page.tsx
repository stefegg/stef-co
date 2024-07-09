import { PageWrapper, LoadingSpinner } from "@/app/_components";
import EditProductWrapper from "./editProductWrapper";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <EditProductWrapper id={id} />
      </Suspense>
    </PageWrapper>
  );
}
