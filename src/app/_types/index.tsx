import { Prisma, Product, Category } from "@prisma/client";
import { SetStateAction } from "react";

export type FullProduct = Product &
  Partial<Prisma.ProductGetPayload<{ include: { category: true } }>>;

export type FullCategory = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;

export type CartItem = {
  prodId: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

export type AddCartProps = {
  setOpacity: (value: SetStateAction<string>) => void;
  cart: CartItem[];
  setCart: (value: SetStateAction<CartItem[]>) => void;
  product: FullProduct;
  setCartQuantity: (value: SetStateAction<number>) => void;
  cartQuantity: number;
  setOperation: (value: SetStateAction<string>) => void;
  setType: (value: SetStateAction<string>) => void;
};

export type ToggleWishProps = {
  setOpacity: (value: SetStateAction<string>) => void;
  product: FullProduct;
  wishlist: FullProduct[];
  setOperation: (value: SetStateAction<string>) => void;
  setType: (value: SetStateAction<string>) => void;
  setWishlist: (value: SetStateAction<FullProduct[]>) => void;
};

export type WishlistTextProps = {
  wishlist: FullProduct[];
  product: FullProduct;
};
