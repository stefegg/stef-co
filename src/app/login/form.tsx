"use client";
import { signIn } from "next-auth/react";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartContext, ThemeContext, BannerContext } from "../_providers";
import { Input, Logo, Button } from "../_components";
import { useFormik } from "formik";
import { loginSchema } from "../_validation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { setOpacity, setType, setOperation } = useContext(BannerContext);
  const { setWishlist } = useContext(CartContext);
  const { appTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (error) {
      setOpacity("100");
      setOperation("");
      setType("Internal Server Error");
      setTimeout(() => {
        setOpacity("0");
      }, 1000);
    }
  }, [error]);
  const handleSubmit = async () => {
    const response = await signIn("credentials", {
      email: formik.values.email,
      password: formik.values.password,
      redirect: false,
    });
    if (!response?.error) {
      setWishlist([]);
      router.push("/");
      router.refresh();
    }
    if (response?.error) {
      setError(response.error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      handleSubmit();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: loginSchema,
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
      <Button
        type="submit"
        buttonText="Login"
        size="med"
        styleType="primary"
        onClick={formik.handleSubmit}
      />
      <div className="mt-2">
        {`Don't have an account?`}
        <Link href="/register" className={`mx-2 text-${appTheme}-link`}>
          Sign up
        </Link>
        for free.
      </div>
    </form>
  );
}
