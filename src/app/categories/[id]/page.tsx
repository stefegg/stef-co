import { PrismaClient } from "@prisma/client";

async function getCatProducts(id: string) {
  "use server";
  const prisma = new PrismaClient();
  const res = await prisma.product.findMany({
    where: {
      categoryId: id,
    },
  });
  return res;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const products = await getCatProducts(id);
  console.log(products, "----catprods");
  return <div>{id}</div>;
}
