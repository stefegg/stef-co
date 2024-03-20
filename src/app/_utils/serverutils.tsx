"use server";
import prisma from "../../../lib/prisma";

export async function getProductById(prodId: string) {
  return await prisma.product.findUnique({
    where: {
      id: prodId,
    },
  });
}

export async function getCategoryProducts(id: string) {
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

export async function getCategories() {
  const res = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return res;
}

export async function getProducts() {
  "use server";
  const res = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return res;
}
