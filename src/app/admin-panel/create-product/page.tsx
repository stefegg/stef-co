"use client";
import React, { useEffect } from "react";
import { PageWrapper, Input, Dropdown, ListHeader } from "@/app/_components";
import { useFormik } from "formik";
import { getCategories } from "@/app/_utils/serverutils";

export default function CreateProductPage() {
  // const categories = await getCategories();
  useEffect(() => {
    const productCategories = async () => {
      let categories = await getCategories();
      const res = categories.map((x) => x.id).sort();
      console.log(res, "------r");
    };
    productCategories();
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      specs: "",
      description: "",
      stock: 0,
      imageUrl: "",
      categoryId: "",
    },
    onSubmit: () => {
      console.log("submit--------");
    },
    // validateOnChange: true,
    // validateOnBlur: true,
  });

  // console.log(categories, "------cat");
  return (
    <PageWrapper>
      <ListHeader title="Create New Product" />
      <form onSubmit={formik.handleSubmit}>
        <span>
          <Input
            width="1/2"
            label="Product Name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleChange("name")}
            value={formik.values.name}
          />
          <Input
            width="1/2"
            label="Product Price"
            onChange={formik.handleChange("price")}
            onBlur={formik.handleChange("price")}
            value={formik.values.price}
            type="number"
          />
        </span>
      </form>
    </PageWrapper>
  );
}
