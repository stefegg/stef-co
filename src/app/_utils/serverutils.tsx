"use server";
import prisma from "../../../lib/prisma";

export async function getProductById(prodId: string) {
  return await prisma.product.findUniqueOrThrow({
    where: {
      id: prodId,
    },
  });
}

export async function getCategoryProducts(id: string) {
  return await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
  });
}

export async function getCategories() {
  return await prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

export async function getProducts() {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  });
}

export async function getFeaturedProducts() {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
}
