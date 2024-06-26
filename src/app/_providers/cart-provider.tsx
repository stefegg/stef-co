"use client";
import React from "react";
import { createContext, useState } from "react";
import { CleanWishlistItem } from "../_types";
import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../_types";

interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
  wishlist: CleanWishlistItem[];
  setWishlist: Dispatch<SetStateAction<CleanWishlistItem[] | []>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => null,
  cartQuantity: 0,
  setCartQuantity: () => null,
  wishlist: [],
  setWishlist: () => null,
  showCart: false,
  setShowCart: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CleanWishlistItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const value = {
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartQuantity,
    setCartQuantity,
    showCart,
    setShowCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
