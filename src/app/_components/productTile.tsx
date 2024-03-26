import { FullProduct } from "../_types";
import Link from "next/link";
import {
  currencyGen,
  addToCart,
  toggleWishlist,
  getWishlistText,
} from "../_utils";
import { useContext } from "react";
import { ThemeContext, CartContext, BannerContext } from "../_providers/index";
import { Button } from ".";

type ProductTileProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductTile(props: ProductTileProps) {
  const { product, catId } = props;
  const { name, price, id, currency } = product;
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

  return (
    <div
      className={`bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border border-2 rounded-lg p-4 h-96`}
    >
      <Link
        href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}
        className={`flex flex-col items-center h-72 w-full`}
      >
        <div className={`bg-${appTheme}-text h-3/4 w-3/4 rounded-lg mt-2`} />
        <div className="flex flex-row gap-2 items-center mt-4">
          <div className="text-lg">{name}</div>-
          <div className="text-base">
            {currencyGen(currency)}
            {price}
          </div>
        </div>
      </Link>
      <div className="flex flex-row gap-2">
        <Button
          styleType="secondary"
          buttonText={getWishlistText({ wishlist, product })}
          size="med"
          onClick={() =>
            toggleWishlist({
              setOpacity,
              product,
              wishlist,
              setOperation,
              setType,
              setWishlist,
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
              product,
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
