import {
  ListHeader,
  SearchBar,
  ProductContainer,
  PageWrapper,
  LoadingSpinner,
} from "@/app/_components";
import { Suspense } from "react";

export default async function AllProducts({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  return (
    <PageWrapper>
      <div className="flex sm:flex-row flex-col sm:items-center mb-4">
        <ListHeader title={"All Products"} />

        <div className="ml-auto w-1/3">
          <SearchBar placeholder="Search Products" />
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductContainer query={query} />
      </Suspense>
    </PageWrapper>
  );
}
