"use client";
import { FullProduct } from "../_types";
import { pagePadding, themeGen } from "../_utils";
import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";

type ProductDisplayProps = {
  product: FullProduct;
};

export default function ProductDisplay(props: ProductDisplayProps) {
  const { product } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${pagePadding()} ${themeGen(appTheme)}  h-[calc(100vh-4rem)]`}
    >
      <div>{product.name}</div>
      <div>image</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <ul>
        {product.specs.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
    </div>
  );
}
