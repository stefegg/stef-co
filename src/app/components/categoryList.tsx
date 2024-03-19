"use client";
import { Prisma, Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";
import { lobsterFont } from "../fonts";
import CategoryCard from "./categoryCard";

type CategoryListProps = {
  categories: CategoryProducts[];
};

type CategoryProducts = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col text-4xl px-8 pt-10  ${themeGen(appTheme)}`}>
      <header className={`${lobsterFont.className} mb-6`}>
        Product Categories
      </header>
      <div
        className={`grid grid-cols-3 text-xl gap-6 gap-y-8 pb-4 grid-auto-rows`}
      >
        {categories
          .sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
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
