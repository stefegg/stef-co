"use client";
import { FetchedProduct } from "../../_types";
import {
  currencyGen,
  addToCart,
  toggleWishlist,
  getWishlistText,
} from "../../_utils";
import { useContext } from "react";
import {
  ThemeContext,
  CartContext,
  BannerContext,
  UserContext,
  ModalContext,
} from "../../_providers/index";
import { Button } from "..";
import Image from "next/image";
import { lobsterFont } from "../../fonts";

type ProductDisplayProps = {
  product: FetchedProduct;
};

export default function ProductDisplay(props: ProductDisplayProps) {
  const { product } = props;
  const { name, price, description, specs, imageUrl, currency } = product;
  const { appTheme } = useContext(ThemeContext);
  const { setShowModal, setModalType, setModalContent } =
    useContext(ModalContext);
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
  const clickImage = () => {
    setModalType("image");
    setModalContent(imageUrl);
    setShowModal(true);
  };
  return (
    <>
      <div className={`flex lg:flex-row flex-col lg:gap-36 gap-2 mb-4 pt-4`}>
        <div
          className={`lg:w-1/3 min-h-2/3 border-${appTheme}-border rounded-lg ml-2 overflow-hidden bg-${appTheme}-photoMatte cursor-pointer`}
          onClick={() => clickImage()}
        >
          <Image
            src={imageUrl}
            alt="imageUrl"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              border: `2px solid ${getBorderColor()}`,
            }}
          />
        </div>
        <div className={`lg:w-1/2 h-auto sm:gap-6 gap-2 flex flex-col`}>
          <div
            className={`${lobsterFont.className} text-2xl md:text-5xl sm:text-4xl`}
          >
            {name}
          </div>
          <div className="font-light text-lg">{description}</div>
          <div className="font-light">
            Specs:
            <div className="w-full grid grid-cols-2 gap-2 pt-2 pl-4 overflow-auto">
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
        <div className={`hidden lg:block w-1/3 ml-2 text-${appTheme}-bodyBg`}>
          pics
        </div>
        <div
          className={`lg:w-1/2 w-full lg:gap-16 gap-4 flex flex-row font-light`}
        >
          <Button
            onClick={() =>
              toggleWishlist({
                setOpacity,
                id: product.id,
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
            buttonText={getWishlistText({ wishlist, id: product.id })}
            size="lg"
            styleType="secondary"
          />
          <Button
            onClick={() =>
              addToCart({
                setOpacity,
                cart,
                setCart,
                id: product.id,
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
      <div className={`gap-2 flex flex-col lg:pl-16`}></div>
    </>
  );
}
