"use client";
import React, { useEffect } from "react";
import { PageWrapper, Input, Dropdown, ListHeader } from "@/app/_components";
import { useFormik } from "formik";
import { getCategories } from "@/app/_utils/serverutils";

export default function CreateProductPage() {
  useEffect(() => {
    const productCategories = async () => {
      let categories = await getCategories();
      const res = categories.map((x) => x.id).sort();
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

  return (
    <PageWrapper>
      <ListHeader title="Create New Product" />
      <form onSubmit={formik.handleSubmit}>
        <span className="flex flex-col gap-2 w-full justify-start py-4">
          <div className="flex flex-row gap-10">
            <Input
              width="1/4"
              label="Product Name"
              onChange={formik.handleChange("name")}
              onBlur={formik.handleChange("name")}
              value={formik.values.name}
            />
            <Input
              width="1/12"
              label="Product Price"
              onChange={formik.handleChange("price")}
              onBlur={formik.handleChange("price")}
              value={formik.values.price}
              type="number"
            />
          </div>
          <div className="flex flex-row gap-10">
            <Input
              width="1/4"
              label="Product Image Url"
              onChange={formik.handleChange("imageUrl")}
              onBlur={formik.handleChange("imageUrl")}
              value={formik.values.imageUrl}
            />
            <Input
              width="1/12"
              label="# In Stock"
              onChange={formik.handleChange("stock")}
              onBlur={formik.handleChange("stock")}
              value={formik.values.stock}
              type="number"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <div>Product Description</div>
            <textarea
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              value={formik.values.description}
              rows={4}
              cols={68}
            />
          </div>
        </span>
      </form>
    </PageWrapper>
  );
}
