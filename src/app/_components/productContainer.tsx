"use client";
import { themeGen, pagePadding } from "../_utils";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext, useState } from "react";
import {
  ListHeader,
  SearchBar,
  ProductGrid,
  ToggleSwitch,
  ProductList,
} from "./index";
import { FullProduct } from "../_types";

type ProdcutContainerProps = {
  products: FullProduct[];
  allProducts?: boolean;
  featuredProducts?: boolean;
  catId?: string;
};

export default function ProductContainer(props: ProdcutContainerProps) {
  const { products, allProducts, catId, featuredProducts } = props;
  const { appTheme } = useContext(ThemeContext);
  const [gridView, setGridView] = useState(true);

  const getTitle = () => {
    if (allProducts) {
      return "All Products";
    }
    if (featuredProducts) {
      return "Featured Products";
    } else return `${products[0].category?.name}`;
  };

  return (
    <div className={`${themeGen(appTheme)} ${pagePadding()} min-h-screen`}>
      {products.length > 0 ? (
        <div className={`mb-4 flex flex-col`}>
          <div className="flex flex-row items-center mb-2">
            <ListHeader title={getTitle()} />
            {!featuredProducts && (
              <div className="ml-auto w-1/3">
                <SearchBar />
              </div>
            )}
          </div>
          <div className="ml-auto mr-6">
            <div className="flex flex-row gap-2">
              {gridView ? "Grid View" : "List View"}
              <ToggleSwitch state={gridView} setState={setGridView} />
            </div>
          </div>
        </div>
      ) : (
        <ListHeader title={"No Products"} />
      )}
      {gridView ? (
        <ProductGrid products={products} catId={catId} />
      ) : (
        <ProductList products={products} catId={catId} />
      )}
    </div>
  );
}
