"use client";
import { PageWrapper, Input, Button } from "../_components";
import { useFormik } from "formik";
import { searchSchema } from "../_validation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../_providers";

export default function Page() {
  const router = useRouter();
  const { appTheme } = useContext(ThemeContext);

  const handleSubmit = () => {
    router.push(`/order-search/${formik.values.search}`);
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
        <div className="text-2xl mb-2">Enter Order Number</div>
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
      <div className="text-lg">
        {`Already a user? `}
        <Link href="/login" className={`text-${appTheme}-link`}>
          Login
        </Link>
        {` to view your orders.`}
      </div>
    </PageWrapper>
  );
}
