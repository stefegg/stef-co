"use client";
import React from "react";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface BannerContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  opacity: string;
  setOpacity: Dispatch<SetStateAction<string>>;
}

export const BannerContext = createContext<BannerContextType>({
  title: "",
  setTitle: () => null,
  opacity: "0",
  setOpacity: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const BannerProvider: React.FC<Props> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [opacity, setOpacity] = useState<string>("0");
  const value = {
    title,
    setTitle,
    opacity,
    setOpacity,
  };
  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
};
