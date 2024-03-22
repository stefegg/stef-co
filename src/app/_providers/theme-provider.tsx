"use client";
import React from "react";
import { createContext, useState } from "react";

interface ThemeContextType {
  appTheme: string;
  setAppTheme: (appTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: "classic",
  setAppTheme: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [appTheme, setAppTheme] = useState("classic");
  const value = {
    appTheme,
    setAppTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
