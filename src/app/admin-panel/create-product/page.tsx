"use client";
import React, { useEffect, useContext, useState } from "react";
import {
  PageWrapper,
  Input,
  Dropdown,
  ListHeader,
  Button,
} from "@/app/_components";
import { useFormik } from "formik";
import { getCategories } from "@/app/_utils/serverutils";
import { productSchema } from "@/app/_validation";
import { ThemeContext, BannerContext } from "@/app/_providers";
import { createProduct } from "@/app/_utils/serverutils";
import { useRouter } from "next/navigation";

type DropdownOptions = {
  title: string;
  setter: () => void;
};

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

  const { appTheme } = useContext(ThemeContext);

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

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 w-full">
        <span className="flex flex-col gap-2 w-full items-center py-4">
          <Input
            width="3/4"
            label="Product Name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            width="3/4"
            label="Product Image Url"
            onChange={formik.handleChange("imageUrl")}
            onBlur={formik.handleBlur("imageUrl")}
            value={formik.values.imageUrl}
            error={formik.touched.imageUrl && formik.errors.imageUrl}
          />

          <div className="w-3/4 flex flex-col gap-1">
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
        </span>
        <span className="flex flex-col pt-4">
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

          <div className="w-3/4 flex flex-col gap">
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
      <div className="w-full flex justify-center">
        <Button
          onClick={formik.handleSubmit}
          buttonText="Submit"
          styleType="primary"
          size="med"
        />
      </div>
    </PageWrapper>
  );
}
