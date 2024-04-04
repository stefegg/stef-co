"use client";
import React from "react";
import { createContext, useState } from "react";
import { SafeUser } from "../_types";
import { Dispatch, SetStateAction } from "react";

interface UserContextType {
  user: SafeUser | null;
  setUser: Dispatch<SetStateAction<SafeUser | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: {
    id: "",
    email: "",
    addresses: [],
  },
  setUser: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<SafeUser | null>(null);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
