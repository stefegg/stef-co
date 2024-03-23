"use client";
import React from "react";
import { createContext, useState } from "react";
import { FullProduct } from "../_types";
import { Dispatch, SetStateAction } from "react";

interface CartContextType {
  cart: FullProduct[];
  setCart: Dispatch<SetStateAction<FullProduct[]>>;
  wishlist: FullProduct[];
  setWishlist: Dispatch<SetStateAction<FullProduct[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => null,
  wishlist: [],
  setWishlist: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<FullProduct[]>([]);
  const [wishlist, setWishlist] = useState<FullProduct[]>([]);
  const value = {
    cart,
    setCart,
    wishlist,
    setWishlist,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
