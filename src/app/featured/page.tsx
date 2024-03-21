import { getFeaturedProducts } from "../_utils/serverutils";
import { ProductList } from "../_components";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();
  return (
    <div>
      <ProductList
        products={products.sort(
          (a, b) => Number(a.categoryId) - Number(b.categoryId)
        )}
        featuredProducts
      />
    </div>
  );
}
