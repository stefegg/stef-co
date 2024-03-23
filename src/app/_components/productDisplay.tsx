"use client";
import { FullProduct } from "../_types";
import { pagePadding, currencyGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../_providers/theme-provider";
import { Button } from ".";
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
      className={`${pagePadding()} text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg min-h-[calc(100vh-4rem)] gap-2 flex flex-col pl-16`}
    >
      <div className={`flex flex-row gap-36 mb-4 pt-8`}>
        <div
          className={`w-1/3 h-2/3 border-2 border-${appTheme}-border rounded-lg ml-2`}
        >
          <Image
            src={"https://i.imgur.com/xWhRNZQ.jpg"}
            alt="imageUrl"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        </div>
        <div className={`w-1/2 h-auto gap-6 flex flex-col`}>
          <div className={`${lobsterFont.className} text-7xl`}>{name}</div>
          <div>{description}</div>
          <div>
            Specs:
            <div className="w-full grid grid-cols-2 gap-2 pt-2 pl-4 overflow-scroll">
              {specs.map((spec, idx) => (
                <div key={idx}>•{spec}</div>
              ))}
            </div>
          </div>
          <div
            className={`${lobsterFont.className} flex flex-col w-full items-end text-5xl pr-12`}
          >
            {currencyGen(currency)}
            {price}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-36">
        <div className={`w-1/3 ml-2`}>pics</div>
        <div className={`w-1/2 gap-16 flex flex-row`}>
          <Button buttonText="Save for Later" size="lg" styleType="secondary" />
          <Button buttonText="Add to Cart" size="lg" styleType="primary" />
        </div>
      </div>
    </div>
  );
}
