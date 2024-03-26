import { FullProduct } from "../_types";
import Link from "next/link";
import { currencyGen, addToCart, toggleWishlist } from "../_utils";
import { useContext } from "react";
import { ThemeContext, CartContext, BannerContext } from "../_providers/index";
import { Button } from ".";

type ProductListProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductListItem(props: ProductListProps) {
  const { product, catId } = props;
  const { name, price, id, currency, specs, description, stock } = product;
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

  const getWishlistText = () => {
    if (wishlist.includes(product)) {
      return "Remove from Wishlist";
    } else return "Add to Wishlist";
  };

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
                buttonText={getWishlistText()}
                styleType="secondary"
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
                    product,
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
              {price}
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
