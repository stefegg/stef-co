"use client";
import { ThemeContext } from "../_providers/theme-provider";
import { useContext } from "react";
import { themeGen } from "../_utils";
import Link from "next/link";
import Image from "next/image";
import { FullCategory } from "../_types";

type CategoryTileProps = {
  category: FullCategory;
};

export default function CategoryTile(props: CategoryTileProps) {
  const { id, name, products, imageUrl } = props.category;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${themeGen(
        appTheme
      )} border-2 cursor-pointer  rounded-lg p-4 h-72 gap-2`}
    >
      <Link
        className="h-full w-full flex flex-col items-center gap-2"
        href={`/categories/${id}`}
      >
        <div
          className={`${
            appTheme === "Classic" ? "bg-yellow" : "bg-green"
          } h-3/4 w-3/4 rounded-lg`}
        >
          <Image
            src={imageUrl}
            alt="imageUrl"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            quality={100}
            unoptimized
          />
        </div>
        <div className="text-base">{name}</div>
        <div className="text-sm">Products: {products?.length}</div>
      </Link>
    </div>
  );
}
