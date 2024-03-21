"use client";
import { FullProduct } from "../_types";
import { ProductListItem } from ".";

type ProductListProps = {
  products: FullProduct[];
  catId?: string;
};

export default function ProductList(props: ProductListProps) {
  const { products, catId } = props;
  return (
    <ul>
      {products.map((product, idx) => (
        <ProductListItem key={idx} product={product} catId={catId} />
      ))}
    </ul>
  );
}
