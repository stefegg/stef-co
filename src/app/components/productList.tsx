"use client";
import { themeGen, pagePadding } from "../_utils";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { ListHeader } from "./listHeader";
import { FullProduct } from "../_types";
import ProductTile from "./productTile";
import SearchBar from "./searchBar";

type ProdcutListProps = {
  products: FullProduct[];
  allProducts?: boolean;
  catId?: string;
};

export default function ProductList(props: ProdcutListProps) {
  const { products, allProducts, catId } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${themeGen(appTheme)} ${pagePadding()} h-[calc(100vh-4rem)]`}
    >
      {Array.isArray(products) ? (
        <div className="flex flex-row items-center">
          <ListHeader
            title={
              allProducts ? "All Products" : `${products[0].category?.name}`
            }
          />
          <div className="ml-auto w-1/3">
            <SearchBar />
          </div>
        </div>
      ) : (
        <ListHeader title={"No Products"} />
      )}
      <div className={`grid grid-cols-3 text-xl gap-6 gap-y-8 grid-auto-rows`}>
        {products.map((product, idx) => (
          <div key={idx}>
            <ProductTile catId={catId} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
