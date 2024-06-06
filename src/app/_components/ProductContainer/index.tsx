import { ProductList } from "../index";
import { getCategoryProducts, getProducts } from "../../_utils/serverutils";

type ProductContainerProps = {
  catId?: string;
  query: string;
};

export default async function ProductContainer(props: ProductContainerProps) {
  const { catId, query } = props;
  const products = catId
    ? await getCategoryProducts(catId)
    : await getProducts();
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
      })
    : [];
  return (
    <>
      <ProductList products={filteredProducts} catId={catId} />
    </>
  );
}
