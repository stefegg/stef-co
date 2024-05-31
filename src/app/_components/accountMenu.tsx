"use client";
import React from "react";
import { ThemeContext, CartContext, UserContext } from "../_providers/index";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type AccountMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
};

export default function AccountMenu(props: AccountMenuProps) {
  const { setShowDrop } = props;
  const { appTheme } = useContext(ThemeContext);
  const { setWishlist } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const logOutClick = () => {
    signOut({ redirect: false });
    setWishlist([]);
    setUser(null);
    router.refresh();
    router.push("/");
  };

  return (
    <div
      className={`flex flex-row  w-[225px] border-2 rounded-md text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg`}
      onMouseLeave={() => setShowDrop(false)}
    >
      {user ? (
        <div
          className={`cursor-pointer flex flex-row justify-center w-full hover:bg-${appTheme}-containerBg py-4 rounded-md`}
          onClick={() => {
            logOutClick();
          }}
        >
          Log Out
        </div>
      ) : (
        <div
          className={`cursor-pointer flex flex-row justify-center w-full hover:bg-${appTheme}-containerBg py-4 rounded-md`}
          onClick={() => router.push("/login")}
        >
          Log In
        </div>
      )}
    </div>
  );
}
