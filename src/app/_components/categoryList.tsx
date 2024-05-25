// "use client";
import { CategoryTile } from "./index";
import { FullCategory } from "../_types";
import { getCategories } from "../_utils/serverutils";
type CategoryListProps = {
  categories?: FullCategory[];
};

export default async function CategoryList(props: CategoryListProps) {
  // const { categories } = props;
  const categories = await getCategories();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-xl gap-6 grid-auto-rows mt-4`}
    >
      {categories
        .sort((a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
        .map((category: any, idx: any) => (
          <CategoryTile key={idx} category={category} />
        ))}
    </div>
  );
}
