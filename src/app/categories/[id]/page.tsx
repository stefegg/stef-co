import { PrismaClient } from "@prisma/client";
import ProductList from "@/app/components/productList";

async function getCatProducts(id: string) {
  "use server";
  const prisma = new PrismaClient();
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

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const products = await getCatProducts(id);
  return (
    <>
      <ProductList catId={id} products={products} />
    </>
  );
}
