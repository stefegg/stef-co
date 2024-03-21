import { CategoryList } from "../_components";
import { getCategories } from "../_utils/serverutils";

export default async function Categories() {
  const categories = await getCategories();
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}
