import { getProductById } from "../_utils/serverutils";
import { ProductDisplay } from "./";
type ProductDisplayWrapperProps = {
  id: string;
};

export default async function ProductDisplayWrapper(
  props: ProductDisplayWrapperProps
) {
  const { id } = props;
  const product = await getProductById(id);

  return (
    <div className={`gap-2 flex flex-col`}>
      <ProductDisplay product={product} />
    </div>
  );
}
