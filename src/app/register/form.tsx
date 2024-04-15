"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BannerContext } from "../_providers";
import { useContext } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { setOperation, setType, setOpacity } = useContext(BannerContext);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
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
      setError("Account already exists");
    }
  };
  return (
    <form
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      onSubmit={handleSubmit}
    >
      <input name="email" className="border border-black" type="email" />
      <input name="password" type="password" className="border border-black" />
      <button type="submit">Register</button>
    </form>
  );
}
