import prisma from "../../../../lib/prisma";
import ProductList from "@/app/components/productList";

async function getCatProducts(id: string) {
  "use server";
  const res = await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
  });
  return res;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string };
}) {
  const { id } = params;
  const query = searchParams?.query || "";
  const products = await getCatProducts(id);
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
