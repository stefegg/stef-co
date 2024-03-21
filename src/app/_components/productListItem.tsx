import { FullProduct } from "../_types";
import Link from "next/link";
import { themeGen, currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";

type ProductListProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductListItem(props: ProductListProps) {
  const { product, catId } = props;
  const { name, price, id, currency } = product;
  const { appTheme } = useContext(ThemeContext);

  return (
    <li>
      <Link href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}>
        <div>{name}</div>
      </Link>
    </li>
  );
}
