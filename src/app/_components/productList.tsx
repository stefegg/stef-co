"use client";
import { FetchedProduct } from "../_types";
import { ProductListItem } from ".";

type ProductListProps = {
  products: FetchedProduct[];
  catId?: string;
};

export default function ProductList(props: ProductListProps) {
  const { products, catId } = props;
  return (
    <ul className="gap-6 flex flex-col sm:pr-6">
      {products.map((product, idx) => (
        <ProductListItem key={idx} product={product} catId={catId} />
      ))}
    </ul>
  );
}
