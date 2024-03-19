import { FullProduct } from "../_types";
import Link from "next/link";

type ProductCardProps = {
  product: FullProduct;
  catId?: string;
};

export default function ProductCard(props: ProductCardProps) {
  const { product, catId } = props;
  const { name, price, id } = product;
  return (
    <div>
      <Link href={catId ? `/categories/${catId}/${id}` : `/allProducts/${id}`}>
        <div>{name}</div>
        <div>{price}</div>
      </Link>
    </div>
  );
}
