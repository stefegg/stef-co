"use client";
import React from "react";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
interface ThemeContextType {
  appTheme: string;
  setAppTheme: (appTheme: string) => void;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: "dark",
  setAppTheme: () => null,
  showSidebar: false,
  setShowSidebar: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [appTheme, setAppTheme] = useState("dark");
  const [showSidebar, setShowSidebar] = useState(false);
  const value = {
    appTheme,
    setAppTheme,
    showSidebar,
    setShowSidebar,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
