"use client";
import { FetchedProduct } from "@/app/_types";
import { useContext } from "react";
import { ThemeContext } from "@/app/_providers";
import { useRouter } from "next/navigation";

type EditPanelProps = {
  product: FetchedProduct;
};

export default function EditPanel(props: EditPanelProps) {
  const { product } = props;
  const { appTheme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center cursor-pointer border border-${appTheme}-text rounded-md p-4`}
      onClick={() => router.push(`/admin-panel/edit-product/${product.id}`)}
    >
      <div className="italic text-lg">{product.name}</div>
      <div className="font-light">In stock: {product.stock}</div>
      <div className="font-light">Price: {product.price}</div>
    </div>
  );
}
