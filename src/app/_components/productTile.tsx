import { FullProduct } from "../_types";
import Link from "next/link";
import { themeGen, currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type ProductTileProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductTile(props: ProductTileProps) {
  const { product, catId } = props;
  const { name, price, id, currency } = product;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className={`${themeGen(appTheme)} border-2 rounded-lg p-4 h-72`}>
      <Link
        href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}
        className={`flex flex-col items-center h-full w-full`}
      >
        <div
          className={`${
            appTheme === "Classic" ? "bg-yellow" : "bg-green"
          } h-3/4 w-3/4 rounded-lg mb-2`}
        />
        <div className="text-lg">{name}</div>
        <div className="text-base">
          {currencyGen(currency)}
          {price}
        </div>
      </Link>
    </div>
  );
}
