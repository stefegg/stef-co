"use client";

import { useState } from "react";
import { ProductGrid, ToggleSwitch, ProductList } from "./index";
import { FetchedProduct } from "../_types";

type ProductContainerProps = {
  products: FetchedProduct[];
  catId?: string;
};

export default function ProductContainer(props: ProductContainerProps) {
  const { products, catId } = props;
  const [gridView, setGridView] = useState(true);

  return (
    <>
      <div className=" mr-6 mb-4">
        <div className="flex flex-row gap-2 w-full justify-end">
          {gridView ? "Grid View" : "List View"}
          <ToggleSwitch state={gridView} setState={setGridView} />
        </div>
      </div>
      {gridView ? (
        <ProductGrid products={products} catId={catId} />
      ) : (
        <ProductList products={products} catId={catId} />
      )}
    </>
  );
}
