import CategoryList from "../components/categoryList";
import { getCategories } from "../_utils/serverutils";

export default async function Categories() {
  const categories = await getCategories();
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}
