import { Prisma, Product, Category } from "@prisma/client";

export type FullProduct = Product &
  Partial<Prisma.ProductGetPayload<{ include: { category: true } }>>;

export type FullCategory = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;
