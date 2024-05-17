import { FetchedProduct } from "../_types";
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

type ProductListProps = {
  product: FetchedProduct;
  catId?: string;
};

export default function ProductListItem(props: ProductListProps) {
  const { product, catId } = props;
  const { name, price, id, currency, specs, description, stock } = product;
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
    <li
      className={`border-2 border-${appTheme}-border rounded-lg bg-${appTheme}-containerBg`}
    >
      <div className={`flex flex-row h-24`}>
        <div
          className={`flex flex-col w-[100%] sm:w-[50%] lg:w-[30%] pt-3 pl-4 gap-3 overflow-auto rounded-l-lg`}
        >
          <Link
            className="flex flex-row gap-4 items-center"
            href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}
          >
            <div className={`text-xl mb-1`}>{name}</div>
            <div>
              {currencyGen(currency)}
              {price.toString()}
            </div>
          </Link>

          <div className={`flex flex-row w-full justify-between pr-6`}>
            <div className="flex flex-row gap-2 mr-2">
              <Button
                buttonText={getWishlistText({ wishlist, id: product.id })}
                styleType="secondary"
                onClick={() =>
                  toggleWishlist({
                    setOpacity,
                    id: product.id,
                    prodName: product.name,
                    prodCurrency: product.currency,
                    prodImageUrl: product.imageUrl,
                    prodPrice: product.price,
                    wishlist,
                    setOperation,
                    setType,
                    setWishlist,
                    user,
                  })
                }
                size="xs"
              />
              <Button
                buttonText={"Add to Cart"}
                styleType="primary"
                onClick={() =>
                  addToCart({
                    setOpacity,
                    cart,
                    setCart,
                    id: product.id,
                    prodName: product.name,
                    prodCurrency: product.currency,
                    prodPrice: product.price,
                    prodImageUrl: product.imageUrl,
                    setCartQuantity,
                    cartQuantity,
                    setOperation,
                    setType,
                  })
                }
                size="xs"
              />
            </div>
          </div>
        </div>
        <div
          className={`sm:w-[40%] hidden lg:block overflow-auto py-2 pl-2 border-l-2 border-r-2 border-${appTheme}-border`}
        >
          <div className={`grid grid-cols-2 gap-2 text-sm`}>
            {specs.map((spec, idx) => (
              <div key={idx}>•{spec}</div>
            ))}
          </div>
        </div>
        <div
          className={`sm:w-[50%] lg:w-[30%] hidden sm:block overflow-auto text-sm py-2 rounded-r-lg px-2`}
        >
          {description}
        </div>
      </div>
    </li>
  );
}
