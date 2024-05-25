"use client";
import { FetchedProduct } from "../_types";
import { ProductListItem, ToggleSwitch, ProductTile } from ".";
import { useState } from "react";

type ProductListProps = {
  products: FetchedProduct[];
  catId?: string;
};

export default function ProductList(props: ProductListProps) {
  const { products, catId } = props;
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <div className="mr-6 mb-4">
        <div className="flex flex-row gap-2 w-full justify-end">
          {gridView ? "Grid View" : "List View"}
          <ToggleSwitch state={gridView} setState={setGridView} />
        </div>
      </div>
      {gridView ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-xl gap-8 grid-auto-rows sm:pr-6`}
        >
          {products.map((product, idx) => (
            <div key={idx}>
              <ProductTile catId={catId} product={product} />
            </div>
          ))}
        </div>
      ) : (
        <ul className="gap-6 flex flex-col sm:pr-6">
          {products.map((product, idx) => (
            <ProductListItem key={idx} product={product} catId={catId} />
          ))}
        </ul>
      )}
    </>
  );
}
