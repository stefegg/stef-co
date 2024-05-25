"use server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import prisma from "../../../lib/prisma";
import { SafeUser, CleanWishlist, CleanWishlistItem } from "../_types";
import { Prisma } from "@prisma/client";

export async function getProductById(prodId: string) {
  const prods = await prisma.product.findUniqueOrThrow({
    where: {
      id: prodId,
    },
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      specs: true,
      description: true,
      stock: true,
      imageUrl: true,
      categoryId: true,
    },
  });
  return JSON.parse(JSON.stringify(prods));
}

export async function getCategoryProducts(id: string) {
  const catProds = await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
  });
  return JSON.parse(JSON.stringify(catProds));
}

export async function getCategories() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cats = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return JSON.parse(JSON.stringify(cats));
  } catch (error) {
    throw new Error("failed to fetch categories");
  }
}

export async function getProducts() {
  const prods = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      specs: true,
      description: true,
      stock: true,
      imageUrl: true,
      categoryId: true,
    },
  });
  return JSON.parse(JSON.stringify(prods));
}

export async function getFeaturedProducts() {
  const prods = await prisma.product.findMany({
    where: {
      featured: true,
    },
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      specs: true,
      description: true,
      stock: true,
      imageUrl: true,
      categoryId: true,
    },
  });
  return JSON.parse(JSON.stringify(prods));
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
): Promise<CleanWishlist | null> {
  const wishlist = await prisma.wishlist.findUnique({
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
  return JSON.parse(JSON.stringify(wishlist));
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
              imageUrl: product.imageUrl,
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

export async function createOrder(
  userId: string,
  orderItems: Prisma.OrderItemCreateManyOrderInput[],
  orderAddress: Prisma.OrderAddressCreateInput,
  subTotal: number,
  orderTax: number,
  shippingCost: number,
  orderTotal: number,
  shipMethod: string
) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        orders: {
          create: {
            orderItems: {
              createMany: {
                data: orderItems,
              },
            },
            orderAddress: {
              create: orderAddress,
            },
            subTotal,
            orderTax,
            shippingCost,
            orderTotal,
            shipMethod,
            shippingStatus: "unfulfilled",
          },
        },
      },
    });
    const order = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        orders: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });
    if (order) {
      return order.orders[0].id.toString();
    } else return "Error";
  } catch (e) {
    throw e;
  }
}

export async function createGuestOrder(
  email: string,
  orderItems: Prisma.OrderItemCreateManyGuestOrderInput[],
  orderAddress: Prisma.GuestOrderAddressCreateInput,
  subTotal: number,
  orderTax: number,
  shippingCost: number,
  orderTotal: number,
  shipMethod: string
) {
  try {
    const order = await prisma.guestOrder.create({
      data: {
        email,
        orderItems: {
          createMany: {
            data: orderItems,
          },
        },
        orderAddress: {
          create: orderAddress,
        },
        subTotal,
        orderTax,
        shippingCost,
        orderTotal,
        shipMethod,
        shippingStatus: "unfulfilled",
      },
    });
    return order.id;
  } catch (e) {
    throw e;
  }
}

export async function getOrderById(orderId: string) {
  const orders = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderAddress: true,
      orderItems: {
        select: {
          name: true,
          price: true,
          quantity: true,
          currency: true,
          imageUrl: true,
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
  });
  return JSON.parse(JSON.stringify(orders));
}

export async function getGuestOrderById(orderId: string) {
  const resp = await prisma.guestOrder.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderAddress: true,
      orderItems: {
        select: {
          name: true,
          price: true,
          quantity: true,
          currency: true,
          imageUrl: true,
        },
      },
    },
  });
  return JSON.parse(JSON.stringify(resp));
}

export async function getOrdersByUserId(userId: string) {
  const userOrders = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: { createdAt: "desc" },
    include: {
      orderItems: {
        select: {
          name: true,
          price: true,
          quantity: true,
          currency: true,
          imageUrl: true,
        },
      },
    },
  });
  return JSON.parse(JSON.stringify(userOrders));
}
