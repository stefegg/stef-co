"use client";
import React from "react";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface BannerContextType {
  operation: string;
  setOperation: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  opacity: string;
  setOpacity: Dispatch<SetStateAction<string>>;
}

export const BannerContext = createContext<BannerContextType>({
  operation: "",
  setOperation: () => null,
  type: "",
  setType: () => null,
  opacity: "0",
  setOpacity: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const BannerProvider: React.FC<Props> = ({ children }) => {
  const [operation, setOperation] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [opacity, setOpacity] = useState<string>("0");
  const value = {
    operation,
    setOperation,
    type,
    setType,
    opacity,
    setOpacity,
  };
  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
};
