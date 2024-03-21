import { FullProduct } from "../_types";
import Link from "next/link";
import { themeGen, currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";

type ProductListProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductListItem(props: ProductListProps) {
  const { product, catId } = props;
  const { name, price, id, currency, specs, description, stock } = product;
  const { appTheme } = useContext(ThemeContext);

  return (
    <li className="border-2 border-yellow rounded-lg">
      <Link href={catId ? `/categories/${catId}/${id}` : `/products/${id}`}>
        <div className={`flex flex-row h-24`}>
          <div
            className={`flex flex-col w-[30%] pt-2 pl-4 gap-3 overflow-scroll rounded-l-lg`}
          >
            <div className={`text-xl`}>{name}</div>
            <div className={`flex flex-row w-full justify-end pr-6`}>
              <div className="mr-6">{stock} in stock</div>
              <div>
                {currencyGen(currency)}
                {price}
              </div>
            </div>
          </div>
          <div
            className={`bg-navy w-[40%] overflow-scroll py-2 pl-2 border-l-2 border-r-2 border-yellow`}
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
      </Link>
    </li>
  );
}
