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
      className={`flex flex-row cursor-pointer border border-${appTheme}-text rounded-md p-4`}
      onClick={() => router.push(`/admin-panel/edit-product/${product.id}`)}
    >
      {product.name}
    </div>
  );
}
