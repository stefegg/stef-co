import { getProducts } from "../_utils/serverutils";
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
  const products = await getProducts();
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  return (
    <PageWrapper>
      <div className="flex flex-row items-center mb-4">
        <ListHeader title={"All Products"} />

        <div className="ml-auto w-1/3">
          <SearchBar placeholder="Search Products" />
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductContainer
          products={filteredProducts.sort(
            (a, b) => Number(a.categoryId) - Number(b.categoryId)
          )}
        />
      </Suspense>
    </PageWrapper>
  );
}
