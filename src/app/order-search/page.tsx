"use client";
import { PageWrapper, Input, Button } from "../_components";
import { useFormik } from "formik";
import { searchSchema } from "../_validation";

export default function Page() {
  const handleSubmit = () => {
    console.log("submit");
  };
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: searchSchema,
  });

  return (
    <PageWrapper>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-2xl">Enter Order Number</div>
        <Input
          name="search"
          width={"1/2"}
          onChange={formik.handleChange("search")}
          onBlur={formik.handleBlur("search")}
          value={formik.values.search}
          error={formik.touched.search && formik.errors.search}
          placeholder="00000000-0000-0000-0000-000000000000"
        />
        <div className="w-1/2 flex flex-row justify-end">
          <Button
            type="submit"
            size="sm"
            buttonText="Search"
            styleType="primary"
            onClick={formik.handleSubmit}
          />
        </div>
      </form>
    </PageWrapper>
  );
}
