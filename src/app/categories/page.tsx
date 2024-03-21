import { CategoryList } from "../components";
import { getCategories } from "../_utils/serverutils";

export default async function Categories() {
  const categories = await getCategories();
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}
