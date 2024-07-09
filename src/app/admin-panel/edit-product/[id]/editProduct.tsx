"use client";
import { useState, useEffect } from "react";
import { FetchedProduct, FullCategory, DropdownOptions } from "@/app/_types";
import { useFormik } from "formik";
import { ProductForm } from "@/app/_components";

type EditProductProps = {
  product: FetchedProduct;
  categories: FullCategory[];
};

export default function EditProduct(props: EditProductProps) {
  const { product, categories } = props;
  const [dropdownOptions, setDropdownOptions] = useState<
    null | DropdownOptions[]
  >(null);
  const [displayCat, setDisplayCat] = useState("");

  useEffect(() => {
    const productCategories = async () => {
      const res = categories.map((x) => {
        return {
          title: x.name,
          setter: () => {
            formik.setFieldValue("categoryId", x.id);
            setDisplayCat(x.name);
          },
        };
      });
      setDropdownOptions(res);
    };
    const initialCategory = categories.filter(
      (x) => x.id === product.categoryId
    );
    setDisplayCat(initialCategory[0].name);
    productCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: product.name,
      price: product.price,
      specs: product.specs,
      description: product.description,
      stock: product.stock,
      imageUrl: product.imageUrl,
      categoryId: product.categoryId,
    },
    onSubmit: () => console.log("submit"),
  });
  return (
    <>
      <ProductForm
        formik={formik}
        displayCat={displayCat}
        dropdownOptions={dropdownOptions ? dropdownOptions : undefined}
      />
    </>
  );
}
