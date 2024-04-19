import {
  Prisma,
  Product,
  Category,
  CustomerAddress,
  Wishlist,
  OrderAddress,
  GuestOrderAddress,
} from "@prisma/client";
import { SetStateAction } from "react";

export type FullProduct = Product &
  Partial<Prisma.ProductGetPayload<{ include: { category: true } }>>;

export type FetchedProduct = {
  id: string;
  name: string;
  price: number;
  currency: string;
  specs: string[];
  description: string;
  stock: number;
  imageUrl: string;
};

export type FullCategory = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;

export type FullWishlist = Wishlist &
  Partial<
    Prisma.WishlistGetPayload<{
      include: {
        wishlistItems: {
          select: {
            prodId: true;
            name: true;
            price: true;
            imageUrl: true;
            currency: true;
          };
        };
      };
    }>
  >;

export type CartItem = {
  prodId: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  imageUrl: string;
};

export type AddCartProps = {
  setOpacity: (value: SetStateAction<string>) => void;
  cart: CartItem[];
  setCart: (value: SetStateAction<CartItem[]>) => void;
  prodId: string;
  prodName: string;
  prodPrice: number;
  prodCurrency: string;
  prodImageUrl: string;
  setCartQuantity: (value: SetStateAction<number>) => void;
  cartQuantity: number;
  setOperation: (value: SetStateAction<string>) => void;
  setType: (value: SetStateAction<string>) => void;
};

export type ToggleWishProps = {
  setOpacity: (value: SetStateAction<string>) => void;
  prodId: string;
  prodName: string;
  prodPrice: number;
  prodCurrency: string;
  prodImageUrl: string;
  wishlist: CleanWishlistItem[];
  setOperation: (value: SetStateAction<string>) => void;
  setType: (value: SetStateAction<string>) => void;
  setWishlist: (value: SetStateAction<CleanWishlistItem[]>) => void;
  user: SafeUser | null;
};

export type WishlistTextProps = {
  wishlist: CleanWishlistItem[];
  prodId: string;
};

export type SafeUser = {
  id: string;
  email: string;
  addresses: CustomerAddress[] | [];
};

export type CleanWishlist = {
  id: string;
  userId: string;
  wishlistItems: CleanWishlistItem[];
};

export type CleanWishlistItem = {
  prodId: string;
  name: string;
  price: number;
  imageUrl: string;
  currency: string;
};

export type CleanOrderUser = {
  email: string;
};

export type CleanOrder = {
  user: CleanOrderUser;
  id: string;
  userId: string;
  addId: string;
  createdAt: Date;
  subTotal: number;
  orderTax: number;
  shippingCost: number;
  orderTotal: number;
  shipMethod: string;
  shippingStatus: string;
  orderItems: CleanOrderItem[];
  orderAddress: OrderAddress;
};

export type CleanGuestOrder = {
  id: string;
  email: string;
  addId: string;
  createdAt: Date;
  subTotal: number;
  orderTax: number;
  shippingCost: number;
  orderTotal: number;
  shipMethod: string;
  shippingStatus: string;
  orderItems: CleanOrderItem[];
  orderAddress: GuestOrderAddress;
};

export type CleanOrderItem = {
  name: string;
  price: number;
  quantity: number;
  currency: string;
  imageUrl: string;
};
