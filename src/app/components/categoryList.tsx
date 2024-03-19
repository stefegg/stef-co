"use client";
import { Prisma, Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen, pagePadding } from "../utils";
import CategoryCard from "./categoryCard";
import { ListHeader } from "./listHeader";
import { FullCategory } from "../_types";

type CategoryListProps = {
  categories: FullCategory[];
};

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col ${themeGen(appTheme)} ${pagePadding()}`}>
      <ListHeader title={"Product Categories"} />
      <div className={`grid grid-cols-3 text-xl gap-6 gap-y-8 grid-auto-rows`}>
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
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </div>
  );
}
