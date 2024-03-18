"use client";
import { Category } from "@prisma/client";
import { ThemeContext } from "../providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../utils";

type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-row h-full ${themeGen(appTheme)}`}>Cat List</div>
  );
}
