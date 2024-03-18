"use client";
import { Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";
import { lobsterFont } from "../fonts";
import CategoryCard from "./categoryCard";
type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col h-full text-4xl pl-8 pt-10 ${themeGen(
        appTheme
      )}`}
    >
      <header className={`${lobsterFont.className} mb-6`}>
        Product Categories
      </header>
      <div className={`flex flex-row text-xl gap-2`}>
        {categories.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
    </div>
  );
}
