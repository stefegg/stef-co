import { getProductById, getCategories } from "@/app/_utils/serverutils";
import EditProduct from "./editProduct";

type EditProductWrapperProps = {
  id: string;
};

export default async function EditProductWrapper(
  props: EditProductWrapperProps
) {
  const { id } = props;
  const product = await getProductById(id);
  const categories = await getCategories();

  return (
    <>
      <EditProduct product={product} categories={categories} />
    </>
  );
}
