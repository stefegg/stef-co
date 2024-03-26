"use client";
import { CategoryTile } from "./index";
import { FullCategory } from "../_types";

type CategoryListProps = {
  categories: FullCategory[];
};

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  return (
    <div className={`grid grid-cols-3 text-xl gap-6 grid-auto-rows mt-4`}>
      {categories
        .sort((a, b) => {
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
        .map((category, idx) => (
          <CategoryTile key={idx} category={category} />
        ))}
    </div>
  );
}
