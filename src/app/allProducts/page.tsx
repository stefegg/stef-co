import { PrismaClient } from "@prisma/client";

async function getProducts() {
  "use server";
  const prisma = new PrismaClient();
  const res = await prisma.product.findMany();
  return res;
}

export default async function AllProducts() {
  const products = await getProducts();
  return <>hi</>;
}
