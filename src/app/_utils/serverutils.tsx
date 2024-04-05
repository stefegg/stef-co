"use server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import prisma from "../../../lib/prisma";
import { SafeUser, FullWishlist, CleanWishlistItem } from "../_types";
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

export async function registerUser(email: string, password: string) {
  try {
    return await prisma.user.create({
      data: {
        email: email,
        password: password,
        addresses: {},
        orders: {},
        wishlist: {},
      },
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      return e.code;
    }
    throw e;
  }
}

export async function loginUser(email: string | undefined) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
  });
  return user;
}

export async function findUser(id: string): Promise<SafeUser> {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      addresses: true,
    },
  });
  return user;
}

export async function getWishlist(
  userId: string
): Promise<FullWishlist | null> {
  return await prisma.wishlist.findUnique({
    where: {
      userId: userId,
    },
    include: {
      wishlistItems: {
        select: {
          prodId: true,
          name: true,
          price: true,
          imageUrl: true,
          currency: true,
        },
      },
    },
  });
}

export async function updateWishlist(
  product: CleanWishlistItem,
  userId: string,
  type: string
) {
  let foundWishlist = await prisma.wishlist.findUnique({
    where: {
      userId: userId,
    },
  });
  if (foundWishlist === null) {
    foundWishlist = await prisma.wishlist.create({
      data: {
        userId: userId,
      },
    });
  }
  if (type === "add" && foundWishlist) {
    const res = await prisma.wishlist.findUnique({
      where: {
        userId: userId,
      },
    });
    if (res) {
      await prisma.wishlist.update({
        where: { id: res.id },

        data: {
          wishlistItems: {
            create: {
              prodId: product.prodId,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl || "",
              currency: product.currency,
            },
          },
        },
      });
    }
  }
  if (type === "remove" && foundWishlist) {
    const res = await prisma.wishlist.findUnique({
      where: {
        userId: userId,
      },
    });
    if (res) {
      await prisma.wishlistItem.deleteMany({
        where: {
          prodId: product.prodId,
        },
      });
    }
  }
}

export async function getProduct(productId: string) {
  return await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
}
