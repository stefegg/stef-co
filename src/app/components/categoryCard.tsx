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
  return <div className={`${themeGen(appTheme)}`}>{name}</div>;
}
