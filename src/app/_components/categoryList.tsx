import { CategoryTile } from "./index";
import { FullCategory } from "../_types";
import { getCategories } from "../_utils/serverutils";
import { Key } from "react";

export default async function CategoryList() {
  const categories = await getCategories();

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-xl gap-8 grid-auto-rows mt-4`}
    >
      {categories
        .sort((a: FullCategory, b: FullCategory) => {
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
        .map((category: FullCategory, idx: Key) => (
          <CategoryTile key={idx} category={category} />
        ))}
    </div>
  );
}
