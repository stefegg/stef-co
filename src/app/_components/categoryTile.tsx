"use client";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
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
      className={`bg-${appTheme}-containerBg text-${appTheme}-text border-${appTheme}-border border-2 cursor-pointer rounded-lg p-4 h-64 gap-2`}
    >
      <Link
        className="h-full w-full flex flex-col items-center gap-2"
        href={`/categories/${id}`}
      >
        <div
          className={`bg-${appTheme}-text w-1/2 h-3/5 sm:w-3/5 rounded-lg mb-2`}
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
        <div className="text-lg">{name}</div>
        <div className="text-base">Products: {products?.length}</div>
      </Link>
    </div>
  );
}
