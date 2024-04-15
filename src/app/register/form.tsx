"use client";
import { useRouter } from "next/navigation";
import { BannerContext, ThemeContext } from "../_providers";
import { useContext } from "react";
import { useFormik } from "formik";
import { Input, Logo, Button } from "../_components";
import Link from "next/link";
import { registerSchema } from "../_validation";

export default function RegisterForm() {
  const router = useRouter();
  const { appTheme } = useContext(ThemeContext);
  const { setOperation, setType, setOpacity } = useContext(BannerContext);
  const handleSubmit = async () => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: formik.values.email,
        password: formik.values.password,
      }),
    });
    if (response.status === 200) {
      router.push("/login");
      router.refresh();
      setTimeout(() => {
        setOperation("Account Created");
        setOpacity("100");
        setType("");
      }, 500);
      setTimeout(() => {
        setOpacity("0");
      }, 2000);
    }
    if (response.status === 409) {
      setTimeout(() => {
        setOperation("Account already exists");
        setOpacity("100");
        setType("");
      }, 500);
      setTimeout(() => {
        setOpacity("0");
      }, 2000);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registerSchema,
  });
  return (
    <form
      className="flex flex-col gap-2 mx-auto max-w-l items-center"
      onSubmit={formik.handleSubmit}
    >
      <div className=" w-1/4">
        <Logo size="large" />
      </div>
      <Input
        name="email"
        width="1/2"
        label="Email"
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        value={formik.values.email}
        type="email"
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        width="1/2"
        label="Password"
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        value={formik.values.password}
        type="password"
        error={formik.touched.password && formik.errors.password}
      />
      <Input
        width="1/2"
        label="Confirm Password"
        onChange={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")}
        value={formik.values.confirmPassword}
        type="password"
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button
        buttonText="Register"
        size="med"
        styleType="primary"
        onClick={formik.handleSubmit}
      />
      <div className="mt-2">
        {`Already't have an account?`}
        <Link href="/login" className={`mx-2 text-${appTheme}-link`}>
          Login
        </Link>
      </div>
    </form>
  );
}
