"use client";
import Link from "next/link";
import {
  currencyGen,
  addToCart,
  toggleWishlist,
  getWishlistText,
} from "../_utils";
import { useContext } from "react";
import {
  ThemeContext,
  CartContext,
  BannerContext,
  UserContext,
} from "../_providers/index";
import { Button } from ".";
import Image from "next/image";

type ProductTileProps = {
  product: {
    id?: string;
    prodId?: string;
    name: string;
    price: number;
    currency: string;
    imageUrl: string;
  };
  catId?: string;
};

export default function ProductTile(props: ProductTileProps) {
  const { product, catId } = props;
  const { id, prodId, name, price, currency, imageUrl } = product;
  const { appTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const getId = () => {
    if (prodId) {
      return `${prodId}`;
    } else return `${id}`;
  };

  const {
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartQuantity,
    setCartQuantity,
  } = useContext(CartContext);
  const { setOpacity, setType, setOperation } = useContext(BannerContext);
  const getBorderColor = () => {
    if (appTheme === "classic") {
      return "white";
    }
    if (appTheme === "light") {
      return "#005faf";
    }
    if (appTheme === "dark") {
      return "#03DAc6";
    }
  };
  return (
    <div
      className={`bg-${appTheme}-containerBg text-${appTheme}-text rounded-lg p-4 h-96 cursor-pointer`}
    >
      <Link
        href={
          catId ? `/categories/${catId}/${getId()}` : `/products/${getId()}`
        }
        className={`flex flex-col items-center h-72 w-full`}
      >
        <div
          className={`bg-${appTheme}-containerBg h-3/4 w-3/4 rounded-lg mt-2  border-${appTheme}-border rounded-lg overflow-hidden`}
        >
          <Image
            src={imageUrl}
            alt="image"
            width={0}
            height={0}
            quality={100}
            unoptimized
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              border: `2px solid ${getBorderColor()}`,
            }}
          />
        </div>
        <div className="flex flex-row gap-2 items-center mt-4">
          <div className="text-lg">{name}</div>
          <div className="text-base">
            {currencyGen(currency)}
            {price}
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-2 w-full justify-evenly">
        <Button
          styleType="secondary"
          buttonText={getWishlistText({ wishlist, id: getId() })}
          size="med"
          onClick={() =>
            toggleWishlist({
              setOpacity,
              id: getId(),
              prodName: name,
              prodPrice: price,
              prodCurrency: currency,
              prodImageUrl: imageUrl,
              wishlist,
              setOperation,
              setType,
              setWishlist,
              user,
            })
          }
        />
        <Button
          styleType="primary"
          buttonText="Add to Cart"
          size="med"
          onClick={() =>
            addToCart({
              setOpacity,
              cart,
              setCart,
              id: getId(),
              prodName: name,
              prodPrice: price,
              prodCurrency: currency,
              prodImageUrl: imageUrl,
              setCartQuantity,
              cartQuantity,
              setOperation,
              setType,
            })
          }
        />
      </div>
    </div>
  );
}
