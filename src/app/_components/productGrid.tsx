"use client";
import { FullProduct } from "../_types";
import { ProductTile } from ".";

type ProductGridProps = {
  products: FullProduct[];
  catId?: string;
};

export default function ProductGrid(props: ProductGridProps) {
  const { products, catId } = props;
  return (
    <div
      className={`grid grid-cols-3 text-xl gap-10 gap-y-8 grid-auto-rows pr-6`}
    >
      {products.map((product, idx) => (
        <div key={idx}>
          <ProductTile catId={catId} product={product} />
        </div>
      ))}
    </div>
  );
}
