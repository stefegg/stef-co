"use client";
import { Prisma, Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";

type CategoryCardProps = {
  category: CategoryProducts;
};

type CategoryProducts = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;

export default function CategoryCard(props: CategoryCardProps) {
  const { name, products } = props.category;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${themeGen(
        appTheme
      )} border-2 cursor-pointer flex flex-col items-center rounded-lg p-4 h-72 gap-2`}
    >
      <div className="bg-yellow h-3/4 w-3/4 rounded-lg">hi</div>
      <div className="text-base">{name}</div>
      <div className="text-sm">Products: {products?.length}</div>
    </div>
  );
}
