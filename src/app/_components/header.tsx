"use client";
import React from "react";
import { CartContext, ThemeContext, UserContext } from "../_providers/index";
import { useContext, useState, useEffect } from "react";
import {
  HeaderMenu,
  Dropdown,
  IndicatorBanner,
  IndicatorCircle,
  Cart,
} from ".";
import Image from "next/image";
import { getFilter } from "../_utils";
import accountIcon from "../../../public/icons/account.png";
import cartIcon from "../../../public/icons/cart_png.png";
import wishList from "../../../public/icons/wishlist.svg";
import { useRouter, usePathname } from "next/navigation";
import { Session } from "next-auth";
import { CleanWishlist, SafeUser } from "../_types";

type HeaderProps = {
  session: {
    session: Session;
    user: SafeUser;
    cleanWishlist: CleanWishlist | null;
  } | null;
};

export default function Header(props: HeaderProps) {
  const { session } = props;
  console.log(session, "-----sesh");
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const { cart, wishlist, showCart, setShowCart, setWishlist } =
    useContext(CartContext);
  const [showDrop, setShowDrop] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (session !== null) {
      setUser(session.user);
      setWishlist(session?.cleanWishlist?.wishlistItems || []);
    }
  }, [session]);

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const themeOptions = [
    {
      title: "Classic",
      setter: () => setAppTheme("classic"),
    },
    {
      title: "Light",
      setter: () => setAppTheme("light"),
    },
    {
      title: "Dark",
      setter: () => setAppTheme("dark"),
    },
  ];

  const toggleCart = () => {
    if (pathName !== "/checkout") {
      setShowCart(!showCart);
    } else null;
  };

  return (
    <div className="flex flex-col relative">
      <span
        className={`h-16 flex items-center px-4 border-b-2 z-10 absolute w-full
    bg-${appTheme}-containerBg border-${appTheme}-border text-${appTheme}-text gap-10 
    `}
      >
        <div className="ml-auto">
          <Dropdown title={"Site Theme"} options={themeOptions} />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => router.push("/wishlist")}
        >
          <Image
            src={wishList}
            height={24}
            width={24}
            alt="wishlist Icon"
            style={iconStyle}
          />
          {wishlist.length > 0 && (
            <div className="absolute left-5 top-5">
              <IndicatorCircle type="wishlist" />
            </div>
          )}
        </div>
        <div className="cursor-pointer relative" onClick={() => toggleCart()}>
          <Image
            src={cartIcon}
            height={24}
            width={24}
            alt="cart Icon"
            style={iconStyle}
          />
          {cart.length > 0 && (
            <div className="absolute left-5 top-5">
              <IndicatorCircle type="cart" />
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={() => setShowDrop(!showDrop)}>
          <Image
            src={accountIcon}
            height={24}
            width={24}
            alt="Account Icon"
            style={iconStyle}
          />
        </div>
        <div
          className={`fixed top-14 right-4  ${showDrop ? "flex" : "hidden"}`}
        >
          <HeaderMenu session={session} setShowDrop={setShowDrop} />
        </div>
        <Cart />
      </span>
      <IndicatorBanner />
    </div>
  );
}
