import { FullProduct } from "../_types";
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
  product: FullProduct;
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
          className={`flex flex-col w-[30%] pt-3 pl-4 gap-3 overflow-scroll rounded-l-lg`}
        >
          <Link href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}>
            <div className={`text-xl mb-1`}>{name}</div>
          </Link>

          <div className={`flex flex-row w-full justify-between pr-6`}>
            <div className="flex flex-row gap-2 mr-2">
              <Button
                buttonText={getWishlistText({ wishlist, prodId: product.id })}
                styleType="secondary"
                onClick={() =>
                  toggleWishlist({
                    setOpacity,
                    prodId: product.id,
                    prodName: product.name,
                    prodCurrency: product.currency,
                    prodImageUrl: product.imageUrl || "",
                    prodPrice: product.price.toNumber(),
                    wishlist,
                    setOperation,
                    setType,
                    setWishlist,
                    user,
                  })
                }
                size="sm"
              />
              <Button
                buttonText={"Add to Cart"}
                styleType="primary"
                onClick={() =>
                  addToCart({
                    setOpacity,
                    cart,
                    setCart,
                    prodId: product.id,
                    prodName: product.name,
                    prodCurrency: product.currency,
                    prodPrice: product.price.toNumber(),
                    prodImageUrl: product.imageUrl ? product.imageUrl : "",
                    setCartQuantity,
                    cartQuantity,
                    setOperation,
                    setType,
                  })
                }
                size="sm"
              />
            </div>
            <div>{stock} in stock</div>
            <div>
              {currencyGen(currency)}
              {price.toNumber()}
            </div>
          </div>
        </div>
        <div
          className={`w-[40%] overflow-scroll py-2 pl-2 border-l-2 border-r-2 border-${appTheme}-border`}
        >
          <div className={`grid grid-cols-2 gap-2 text-sm`}>
            {specs.map((spec, idx) => (
              <div key={idx}>•{spec}</div>
            ))}
          </div>
        </div>
        <div
          className={`w-[30%] overflow-scroll text-sm py-2 rounded-r-lg px-2`}
        >
          {description}
        </div>
      </div>
    </li>
  );
}
