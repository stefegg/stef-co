"use client";
import { FullProduct } from "../_types";
import { currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext, CartContext, BannerContext } from "../_providers/index";
import { Button } from ".";
import Image from "next/image";
import { lobsterFont } from "../fonts";

type ProductDisplayProps = {
  product: FullProduct;
};

export default function ProductDisplay(props: ProductDisplayProps) {
  const { product } = props;
  const { id, name, price, description, specs, imageUrl, currency } = product;
  const { appTheme } = useContext(ThemeContext);
  const {
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartQuantity,
    setCartQuantity,
  } = useContext(CartContext);
  const { setOpacity, setType, setOperation } = useContext(BannerContext);

  const addToCart = () => {
    setOpacity("0");
    if (cart.length > 0) {
      cart.map((cItem) =>
        cItem.prodId === id ? (cItem.quantity = cItem.quantity + 1) : null
      );
      setCartQuantity(cartQuantity + 1);
      setOperation("Updated ");
    } else {
      setCart([
        {
          prodId: id,
          name: name,
          price: price,
          currency: currency,
          quantity: 1,
        },
      ]);
      setCartQuantity(cartQuantity + 1);
      setOperation("Added to ");
    }
    setOpacity("100");
    setType("Cart");
    setTimeout(() => {
      setOpacity("0");
    }, 1000);
  };

  const toggleWishlist = () => {
    setOpacity("0");
    if (wishlist.includes(product)) {
      const newWishlist = wishlist.filter((e) => e !== product);
      setWishlist(newWishlist);
      setOperation("Removed from ");
    } else {
      setWishlist([...wishlist, product]);
      setOperation("Added to ");
    }
    setOpacity("100");
    setType("Wishlist");
    setTimeout(() => {
      setOpacity("0");
    }, 1000);
  };

  const getWishlistText = () => {
    if (wishlist.includes(product)) {
      return "Remove from Wishlist";
    } else return "Add to Wishlist";
  };

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
            {price}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-36">
        <div className={`w-1/3 ml-2`}>pics</div>
        <div className={`w-1/2 gap-16 flex flex-row`}>
          <Button
            onClick={() => toggleWishlist()}
            buttonText={getWishlistText()}
            size="lg"
            styleType="secondary"
          />
          <Button
            onClick={() => addToCart()}
            buttonText="Add to Cart"
            size="lg"
            styleType="primary"
          />
        </div>
      </div>
    </div>
  );
}
