"use client";
import React, { useEffect, useContext, useState } from "react";
import { PageWrapper, Input, Dropdown, ListHeader } from "@/app/_components";
import { useFormik } from "formik";
import { getCategories } from "@/app/_utils/serverutils";
import { productSchema } from "@/app/_validation";
import { ThemeContext } from "@/app/_providers";

type DropdownOptions = {
  title: string;
  setter: () => void;
};

export default function CreateProductPage() {
  const [dropdownOptions, setDropdownOptions] = useState<
    null | DropdownOptions[]
  >(null);
  const [displayCat, setDisplayCat] = useState("");
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

  const { appTheme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      specs: [""],
      description: "",
      stock: 0,
      imageUrl: "",
      categoryId: 0,
    },
    onSubmit: () => {
      console.log(formik.values, "submit--------");
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: productSchema,
  });
  return (
    <PageWrapper>
      <ListHeader title="Create New Product" />
      <form onSubmit={formik.handleSubmit}>
        <span className="flex flex-col gap-2 w-full justify-start py-4">
          <Input
            width="1/3"
            label="Product Name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            width="1/3"
            label="Product Image Url"
            onChange={formik.handleChange("imageUrl")}
            onBlur={formik.handleBlur("imageUrl")}
            value={formik.values.imageUrl}
            error={formik.touched.imageUrl && formik.errors.imageUrl}
          />
          <div className="flex flex-row gap-4">
            <Input
              width="1/12"
              label="# In Stock"
              onChange={formik.handleChange("stock")}
              onBlur={formik.handleBlur("stock")}
              value={formik.values.stock}
              type="number"
              error={formik.touched.stock && formik.errors.stock}
            />
            <Input
              width="1/12"
              label="Product Price"
              onChange={formik.handleChange("price")}
              onBlur={formik.handleBlur("price")}
              value={formik.values.price}
              type="number"
              error={formik.touched.price && formik.errors.price}
            />
            <Dropdown
              title="Category"
              value={displayCat}
              options={dropdownOptions ? dropdownOptions : undefined}
              error={formik.touched.categoryId && formik.errors.categoryId}
            />
          </div>
          <div className="w-1/3 flex flex-col gap-1">
            <div>Product Description</div>
            <textarea
              className={`rounded-sm outline-0 border-2 border-${appTheme}-${
                formik.touched.description && formik.errors.description
                  ? `error`
                  : `text`
              } focus:border-${appTheme}-secondary text-black`}
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              value={formik.values.description}
              rows={4}
              cols={100}
            />
            <span className={`h-3.5 text-sm text-${appTheme}-error`}>
              {formik.touched.description && formik.errors.description
                ? formik.errors.description
                : ""}
            </span>
          </div>
          <div className="w-1/3 flex flex-col gap">
            <div>Product Specs</div>
            <div className="grid grid-cols-2 w-full gap-2">
              <Input
                width="full"
                value={formik.values.specs[0]}
                onChange={formik.handleChange("specs[0]")}
                onBlur={formik.handleBlur("specs[0]")}
                error={formik.touched.specs && formik.errors.specs}
              />
              <Input
                width="full"
                value={formik.values.specs[1]}
                onChange={formik.handleChange("specs[1]")}
              />
              <Input
                width="full"
                value={formik.values.specs[2]}
                onChange={formik.handleChange("specs[2]")}
              />
              <Input
                width="full"
                value={formik.values.specs[3]}
                onChange={formik.handleChange("specs[3]")}
              />
              <Input
                width="full"
                value={formik.values.specs[4]}
                onChange={formik.handleChange("specs[4]")}
              />
              <Input
                width="full"
                value={formik.values.specs[5]}
                onChange={formik.handleChange("specs[5]")}
              />
            </div>
          </div>
        </span>
      </form>
    </PageWrapper>
  );
}
