"use client";
import { Prisma, Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";
import Link from "next/link";

type CategoryCardProps = {
  category: CategoryProducts;
};

type CategoryProducts = Category &
  Partial<Prisma.CategoryGetPayload<{ include: { products: true } }>>;

export default function CategoryCard(props: CategoryCardProps) {
  const { id, name, products } = props.category;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${themeGen(
        appTheme
      )} border-2 cursor-pointer  rounded-lg p-4 h-72 gap-2`}
    >
      <Link
        className="h-full w-full flex flex-col items-center"
        href={`/categories/${id}`}
      >
        <div className="bg-yellow h-3/4 w-3/4 rounded-lg">hi</div>
        <div className="text-base">{name}</div>
        <div className="text-sm">Products: {products?.length}</div>
      </Link>
    </div>
  );
}
