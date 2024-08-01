"use client";
import React, { useEffect, useContext, useState } from "react";
import { PageWrapper, ListHeader, ProductForm } from "@/app/_components";
import { useFormik } from "formik";
import { getCategories } from "@/app/_utils/serverutils";
import { productSchema } from "@/app/_validation";
import { BannerContext } from "@/app/_providers";
import { createProduct } from "@/app/_utils/serverutils";
import { useRouter } from "next/navigation";
import { DropdownOptions } from "@/app/_types";

export default function CreateProductPage() {
  const [dropdownOptions, setDropdownOptions] = useState<
    null | DropdownOptions[]
  >(null);
  const [displayCat, setDisplayCat] = useState("");
  const router = useRouter();
  const { setOpacity, setOperation } = useContext(BannerContext);

  useEffect(() => {
    const productCategories = async () => {
      let categories = await getCategories();
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
    productCategories();
  }, []);

  const submitOrder = async () => {
    const res = await createProduct(
      formik.values.name,
      formik.values.price,
      formik.values.specs,
      formik.values.description,
      formik.values.stock,
      formik.values.imageUrl,
      formik.values.categoryId
    );
    if (res) {
      router.push(`/products/${res}`);
      router.refresh();
      setTimeout(() => {
        setOperation("Product Created");
        setOpacity("100");
      }, 500);
      setTimeout(() => {
        setOpacity("0");
      }, 2000);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      specs: [""],
      description: "",
      stock: 0,
      imageUrl: "",
      categoryId: "",
    },
    onSubmit: () => {
      submitOrder();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: productSchema,
  });
  return (
    <PageWrapper>
      <div className="w-full justify-center flex mb-4">
        <ListHeader title="Create New Product" />
      </div>

      <ProductForm
        formik={formik}
        displayCat={displayCat}
        dropdownOptions={dropdownOptions ? dropdownOptions : undefined}
      />
    </PageWrapper>
  );
}
