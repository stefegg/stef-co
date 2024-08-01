"use client";
import Input from "../Input";
import Dropdown from "../DropDown";
import { ThemeContext } from "@/app/_providers";
import { useContext } from "react";
import { DropdownOptions } from "@/app/_types";
import Button from "../Button";

type ProductFormProps = {
  formik: any;
  displayCat: string;
  dropdownOptions: DropdownOptions[] | undefined;
};

export default function ProductForm(props: ProductFormProps) {
  const { formik, displayCat, dropdownOptions } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <>
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
    </>
  );
}
