"use client";
import React from "react";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { lobsterFont } from "../fonts";
import { Logo } from "./index";
import { CleanWishlist, SafeUser } from "../_types";
import { Session } from "next-auth";
import { CartContext, ThemeContext, UserContext } from "../_providers/index";

type SidebarCapProps = {
  session: {
    session: Session;
    user: SafeUser;
    cleanWishlist: CleanWishlist | null;
  } | null;
};

export default function SidebarCap(props: SidebarCapProps) {
  const { appTheme } = useContext(ThemeContext);
  const { session } = props;
  const { user, setUser } = useContext(UserContext);
  const { setWishlist } = useContext(CartContext);

  useEffect(() => {
    if (session && session !== null) {
      setUser(session.user);
      setWishlist(session?.cleanWishlist?.wishlistItems || []);
    }
  }, [session]);

  return (
    <Link href="/">
      <div
        className={`min-h-16 max-h-16 flex flex-col items-center justify-center text-${appTheme}-text bg-${appTheme}-containerBg border-${appTheme}-border ${lobsterFont.className} w-full`}
      >
        <Logo size={"small"} />
      </div>
    </Link>
  );
}
