"use client";
import React from "react";
import { createContext, useState } from "react";
import { FullProduct } from "../_types";
import { Dispatch, SetStateAction } from "react";

type CartItem = {
  prodId: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
  wishlist: FullProduct[];
  setWishlist: Dispatch<SetStateAction<FullProduct[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => null,
  cartQuantity: 0,
  setCartQuantity: () => null,
  wishlist: [],
  setWishlist: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<FullProduct[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const value = {
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartQuantity,
    setCartQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
