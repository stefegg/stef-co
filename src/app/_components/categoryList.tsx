"use client";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
import { pagePadding } from "../_utils";
import { CategoryTile, ListHeader } from "./index";
import { FullCategory } from "../_types";

type CategoryListProps = {
  categories: FullCategory[];
};

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col bg-${appTheme}-bodyBg text-${appTheme}-text border-${appTheme}-border ${pagePadding()} min-h-screen`}
    >
      <ListHeader title={"Product Categories"} />
      <div
        className={`grid grid-cols-3 text-xl gap-10 gap-y-8 grid-auto-rows mt-4`}
      >
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
    </div>
  );
}
