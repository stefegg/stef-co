"use client";
import { CleanWishlistItem, FetchedProduct } from "../_types";
import Link from "next/link";
import {
  currencyGen,
  addToCart,
  toggleWishlist,
  getWishlistText,
} from "../_utils";
import { useContext, useState, useEffect } from "react";
import {
  ThemeContext,
  CartContext,
  BannerContext,
  UserContext,
} from "../_providers/index";
import { Button } from ".";

type ProductTileProps = {
  product?: FetchedProduct;
  wishItem?: CleanWishlistItem;
  catId?: string;
};

export default function ProductTile(props: ProductTileProps) {
  const { product, catId, wishItem } = props;
  const { appTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const {
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartQuantity,
    setCartQuantity,
  } = useContext(CartContext);
  const { setOpacity, setType, setOperation } = useContext(BannerContext);
  const [propType, setpropType] = useState<
    FetchedProduct | CleanWishlistItem
  >();
  useEffect(() => {
    if (props.product) {
      setpropType(product);
    }
    if (props.wishItem) {
      setpropType(wishItem);
    }
  }, []);
  const getId = () => {
    if (props.product) {
      return `${props.product.id}`;
    }
    if (props.wishItem) {
      return `${props.wishItem.prodId}`;
    } else return `id`;
  };
  return (
    <div
      className={`bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border border-2 rounded-lg p-4 h-96`}
    >
      <Link
        href={
          catId ? `/categories/${catId}/${getId()}` : `/products/${getId()}`
        }
        className={`flex flex-col items-center h-72 w-full`}
      >
        <div className={`bg-${appTheme}-text h-3/4 w-3/4 rounded-lg mt-2`} />
        <div className="flex flex-row gap-2 items-center mt-4">
          <div className="text-lg">{propType && propType.name}</div>
          <div className="text-base">
            {currencyGen(propType ? propType.currency : "USD")}
            {propType && propType.price.toString()}
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-2 w-full justify-evenly">
        <Button
          styleType="secondary"
          buttonText={getWishlistText({ wishlist, prodId: getId() })}
          size="med"
          onClick={() =>
            toggleWishlist({
              setOpacity,
              prodId: getId(),
              prodName: (propType && propType.name) || "",
              prodPrice:
                (propType && JSON.parse(JSON.stringify(propType.price))) || 0,
              prodCurrency: (propType && propType.currency) || "",
              prodImageUrl: (propType && propType.imageUrl) || "",
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
              prodId: getId(),
              prodName: (propType && propType.name) || "",
              prodPrice:
                (propType && JSON.parse(JSON.stringify(propType.price))) || 0,
              prodCurrency: (propType && propType.currency) || "",
              prodImageUrl: (propType && propType.imageUrl) || "",
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
