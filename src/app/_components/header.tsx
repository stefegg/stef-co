"use client";
import React from "react";
import { CartContext, ThemeContext, UserContext } from "../_providers/index";
import { useContext, useState } from "react";
import {
  HeaderMenu,
  Dropdown,
  IndicatorBanner,
  IndicatorCircle,
  Cart,
  MobileMenu,
} from ".";
import Image from "next/image";
import { getFilter } from "../_utils";
import accountIcon from "../../../public/icons/account.png";
import cartIcon from "../../../public/icons/cart_png.png";
import wishList from "../../../public/icons/wishlist.svg";
import orderTruck from "../../../public/icons/truck.svg";
import bars from "../../../public/icons/bars.svg";
import barsDown from "../../../public/icons/barsdown.svg";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { cart, wishlist, showCart, setShowCart } = useContext(CartContext);
  const [showDrop, setShowDrop] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

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

  const showMobMenu = () => {
    setShowCart(false);
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex flex-col relative">
      <span
        className={`h-16 flex items-center px-4 border-b-2 z-10 fixed w-[100%] sm:w-[87%]
    bg-${appTheme}-containerBg border-${appTheme}-border text-${appTheme}-text gap-6 sm:gap-10 
    `}
      >
        <div
          className={`sm:hidden cursor-pointer relative hover:bg-${appTheme}-bodyBg rounded-full p-2`}
          onClick={() => showMobMenu()}
        >
          <Image
            src={showMobileMenu ? barsDown : bars}
            height={24}
            width={24}
            alt="my orders Icon"
            style={iconStyle}
          />
        </div>
        <div className="ml-auto">
          <Dropdown title={"Site Theme"} options={themeOptions} />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => router.push(user ? "/my-orders" : "/order-search")}
        >
          <Image
            src={orderTruck}
            height={24}
            width={24}
            alt="my orders Icon"
            style={iconStyle}
          />
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
          <HeaderMenu setShowDrop={setShowDrop} />
        </div>
        <Cart />
      </span>
      <IndicatorBanner />
      {showMobileMenu && <MobileMenu />}
    </div>
  );
}
