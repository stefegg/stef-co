import { PrismaClient } from "@prisma/client";
import ProductList from "@/app/components/productList";

async function getProducts() {
  "use server";
  const prisma = new PrismaClient();
  const res = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return res;
}

export default async function AllProducts() {
  const products = await getProducts();
  return (
    <>
      <ProductList
        products={products.sort(
          (a, b) => Number(a.categoryId) - Number(b.categoryId)
        )}
        allProducts
      />
    </>
  );
}
