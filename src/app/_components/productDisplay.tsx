"use client";
import { FetchedProduct } from "../_types";
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
import { lobsterFont } from "../fonts";

type ProductDisplayProps = {
  product: FetchedProduct;
};

export default function ProductDisplay(props: ProductDisplayProps) {
  const { product } = props;
  const { id, name, price, description, specs, imageUrl, currency } = product;
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

  return (
    <div className={`gap-2 flex flex-col pl-16`}>
      <div className={`flex flex-row gap-36 mb-4 pt-8`}>
        <div
          className={`w-1/3 h-2/3 border-2 border-${appTheme}-border rounded-lg ml-2`}
        >
          <Image
            src={"https://i.imgur.com/xWhRNZQ.jpg"}
            alt="imageUrl"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className={`w-1/2 h-auto gap-6 flex flex-col`}>
          <div className={`${lobsterFont.className} text-7xl`}>{name}</div>
          <div>{description}</div>
          <div>
            Specs:
            <div className="w-full grid grid-cols-2 gap-2 pt-2 pl-4 overflow-scroll">
              {specs.map((spec, idx) => (
                <div key={idx}>•{spec}</div>
              ))}
            </div>
          </div>
          <div
            className={`${lobsterFont.className} flex flex-col w-full items-end text-5xl pr-12`}
          >
            {currencyGen(currency)}
            {price.toString()}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-36">
        <div className={`w-1/3 ml-2`}>pics</div>
        <div className={`w-1/2 gap-16 flex flex-row`}>
          <Button
            onClick={() =>
              toggleWishlist({
                setOpacity,
                prodId: product.id,
                prodName: product.name,
                prodCurrency: product.currency,
                prodImageUrl: product.imageUrl || "",
                prodPrice: product.price,
                wishlist,
                setOperation,
                setType,
                setWishlist,
                user,
              })
            }
            buttonText={getWishlistText({ wishlist, prodId: product.id })}
            size="lg"
            styleType="secondary"
          />
          <Button
            onClick={() =>
              addToCart({
                setOpacity,
                cart,
                setCart,
                prodId: product.id,
                prodName: product.name,
                prodCurrency: product.currency,
                prodPrice: product.price,
                prodImageUrl: product.imageUrl ? product.imageUrl : "",
                setCartQuantity,
                cartQuantity,
                setOperation,
                setType,
              })
            }
            buttonText="Add to Cart"
            size="lg"
            styleType="primary"
          />
        </div>
      </div>
    </div>
  );
}
