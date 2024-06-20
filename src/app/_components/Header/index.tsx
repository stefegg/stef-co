"use client";
import React from "react";
import {
  CartContext,
  ThemeContext,
  UserContext,
  ModalContext,
} from "../../_providers/index";
import { useContext, useState, useRef } from "react";
import {
  AccountMenu,
  IndicatorBanner,
  IndicatorCircle,
  Cart,
  MobileMenu,
  ThemeMenu,
  Sidebar,
  HeaderLogo,
} from "..";
import Image from "next/image";
import { getFilter } from "../../_utils";
import {
  account,
  cartIcon,
  truck,
  bars,
  theme,
  wishlistIcon,
} from "../../../../public/icons";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const { appTheme, showSidebar, setShowSidebar } = useContext(ThemeContext);
  const { setShowModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const { cart, wishlist, showCart, setShowCart } = useContext(CartContext);
  const [showAccount, setShowAccount] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const sideBarToggleRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathName = usePathname();

  const iconStyle = {
    filter: getFilter(appTheme),
  };

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
    <div className="flex flex-col relative" onClick={() => setShowModal(false)}>
      <span
        className={`h-16 flex items-center px-4 z-10 fixed w-[100%] bg-${appTheme}-containerBg text-${appTheme}-text gap-6 sm:gap-10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80
    `}
      >
        <div
          className={`sm:hidden cursor-pointer relative hover:bg-${appTheme}-bodyBg rounded-full p-2`}
          onClick={() => showMobMenu()}
        >
          <Image
            src={bars}
            height={24}
            width={24}
            alt="my orders Icon"
            style={iconStyle}
          />
        </div>
        <div
          className={`hidden sm:flex cursor-pointer relative hover:bg-${appTheme}-bodyBg rounded-full p-2`}
          onClick={() => setShowSidebar(!showSidebar)}
          ref={sideBarToggleRef}
        >
          <Image
            src={bars}
            height={24}
            width={24}
            alt="my orders Icon"
            style={iconStyle}
          />
        </div>
        <div className="hidden sm:flex relative right-6">
          <HeaderLogo />
        </div>
        <div
          className="cursor-pointer ml-auto"
          onClick={() => setShowTheme(!showTheme)}
        >
          <Image
            src={theme}
            height={24}
            width={24}
            alt="Account Icon"
            style={iconStyle}
          />
        </div>
        <div
          className={`fixed top-14 right-32 sm:right-64  ${
            showTheme ? "flex" : "hidden"
          }`}
        >
          <ThemeMenu setShowDrop={setShowTheme} />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => router.push(user ? "/my-orders" : "/order-search")}
        >
          <Image
            src={truck}
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
            src={wishlistIcon}
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
        <div
          className="cursor-pointer"
          onClick={() => setShowAccount(!showAccount)}
        >
          <Image
            src={account}
            height={24}
            width={24}
            alt="Account Icon"
            style={iconStyle}
          />
        </div>
        <div
          className={`fixed top-14 right-4  ${showAccount ? "flex" : "hidden"}`}
        >
          <AccountMenu setShowDrop={setShowAccount} />
        </div>
        <Cart />
        <Sidebar toggleRef={sideBarToggleRef} />
        {showMobileMenu && <MobileMenu />}
      </span>
      <IndicatorBanner />
    </div>
  );
}
