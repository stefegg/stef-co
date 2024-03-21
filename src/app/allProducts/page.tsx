import { ProductList } from "@/app/components";
import { getProducts } from "../_utils/serverutils";

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
    <>
      <ProductList
        products={filteredProducts.sort(
          (a, b) => Number(a.categoryId) - Number(b.categoryId)
        )}
        allProducts
      />
    </>
  );
}
