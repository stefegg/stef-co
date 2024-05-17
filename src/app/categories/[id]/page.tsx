import { getCategoryProducts } from "@/app/_utils/serverutils";
import {
  ListHeader,
  SearchBar,
  ProductContainer,
  PageWrapper,
  LoadingSpinner,
} from "@/app/_components";
import { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string };
}) {
  const { id } = params;
  const query = searchParams?.query || "";
  const products = await getCategoryProducts(id);

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
      })
    : [];
  return (
    <PageWrapper>
      <div className="flex sm:flex-row flex-col mb-4">
        <Suspense fallback={<LoadingSpinner />}>
          <ListHeader
            title={
              products.length ? `${products[0].category.name}` : "No Products"
            }
          />

          <div className="ml-auto w-1/3">
            <SearchBar placeholder={"Search Products"} />
          </div>
        </Suspense>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductContainer catId={id} products={filteredProducts} />
      </Suspense>
    </PageWrapper>
  );
}
