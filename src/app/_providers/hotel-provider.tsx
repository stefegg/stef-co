"use client";
import React from "react";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { HotelCart, HotelStayLength } from "../_types";

interface HotelContextType {
  cart: HotelCart | null;
  setCart: Dispatch<SetStateAction<HotelCart | null>>;
  showSiteModal: boolean;
  setShowSiteModal: Dispatch<SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  showCheckout: boolean;
  setShowCheckout: Dispatch<SetStateAction<boolean>>;
  stayLength: HotelStayLength;
  setStayLength: Dispatch<SetStateAction<HotelStayLength>>;
}

export const HotelContext = createContext<HotelContextType>({
  cart: null,
  setCart: () => null,
  showCart: false,
  setShowCart: () => null,
  showSiteModal: false,
  setShowSiteModal: () => null,
  showCheckout: false,
  setShowCheckout: () => null,
  stayLength: { startDate: "", endDate: "", numDays: 0, numNights: 0 },
  setStayLength: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const HotelProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<HotelCart | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showSiteModal, setShowSiteModal] = useState<boolean>(false);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const [stayLength, setStayLength] = useState<HotelStayLength>({
    startDate: "",
    endDate: "",
    numDays: 0,
    numNights: 0,
  });
  const value = {
    cart,
    setCart,
    showCart,
    setShowCart,
    showSiteModal,
    setShowSiteModal,
    showCheckout,
    setShowCheckout,
    stayLength,
    setStayLength,
  };
  return (
    <HotelContext.Provider value={value}>{children}</HotelContext.Provider>
  );
};
