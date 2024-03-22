"use client";
import { FullProduct } from "../_types";
import { pagePadding, currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";
import Image from "next/image";
import { lobsterFont } from "../fonts";

type ProductDisplayProps = {
  product: FullProduct;
};

export default function ProductDisplay(props: ProductDisplayProps) {
  const { product } = props;
  const { name, price, description, specs, imageUrl, currency } = product;

  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${pagePadding()} text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg min-h-[calc(100vh-4rem)] gap-2 flex flex-col`}
    >
      <div className={`flex flex-row gap-32 mb-4 pt-8 `}>
        <div className={`w-1/3 h-auto border-2 border-red rounded-lg`}>
          <Image
            src={"https://i.imgur.com/xWhRNZQ.jpg"}
            alt="imageUrl"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className={`w-1/2 h-auto`}>
          <div className={`${lobsterFont.className} text-7xl mb-8`}>{name}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className="flex flex-col">
        Specs:
        <div className="w-1/2 grid grid-cols-2 gap-2 mr-auto pt-2 pl-4">
          {specs.map((spec, idx) => (
            <div key={idx}>•{spec}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
