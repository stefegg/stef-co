"use client";
import { useState, useEffect, useContext } from "react";
import { FetchedProduct, FullCategory, DropdownOptions } from "@/app/_types";
import { useFormik } from "formik";
import { ProductForm } from "@/app/_components";
import { updateProduct } from "@/app/_utils/serverutils";
import { productSchema } from "@/app/_validation";
import { useRouter } from "next/navigation";
import { BannerContext } from "@/app/_providers";

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
  const { setOpacity, setOperation } = useContext(BannerContext);
  const router = useRouter();

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

  const submitEdit = async () => {
    const res = await updateProduct({
      id: product.id,
      name: formik.values.name,
      price: formik.values.price,
      specs: formik.values.specs,
      description: formik.values.description,
      stock: formik.values.stock,
      imageUrl: formik.values.imageUrl,
      categoryId: formik.values.categoryId,
      currency: product.currency,
    });
    if (res) {
      router.push(`/admin-panel/edit-product`);
      router.refresh();
      setTimeout(() => {
        setOperation(`Updated ${res}`);
        setOpacity("100");
      }, 500);
      setTimeout(() => {
        setOpacity("0");
      }, 2000);
    }
  };

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
    onSubmit: () => {
      submitEdit();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: productSchema,
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
