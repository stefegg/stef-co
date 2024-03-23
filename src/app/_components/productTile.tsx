import { FullProduct } from "../_types";
import Link from "next/link";
import { currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../_providers/index";

type ProductTileProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductTile(props: ProductTileProps) {
  const { product, catId } = props;
  const { name, price, id, currency } = product;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border border-2 rounded-lg p-4 h-72`}
    >
      <Link
        href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}
        className={`flex flex-col items-center h-full w-full`}
      >
        <div className={`bg-${appTheme}-text h-3/4 w-3/4 rounded-lg my-2`} />
        <div className="text-lg">{name}</div>
        <div className="text-base">
          {currencyGen(currency)}
          {price}
        </div>
      </Link>
    </div>
  );
}
