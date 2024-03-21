import { ProductList } from "@/app/components";
import { getCategoryProducts } from "@/app/_utils/serverutils";

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
    <>
      <ProductList catId={id} products={filteredProducts} />
    </>
  );
}
