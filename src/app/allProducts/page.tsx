import prisma from "../../../lib/prisma";
import ProductList from "@/app/components/productList";

async function getProducts() {
  "use server";
  const res = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return res;
}

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
