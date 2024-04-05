"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../_providers";
import { useContext } from "react";

export default function Form() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { setWishlist } = useContext(CartContext);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!response?.error) {
      setWishlist([]);
      router.push("/");
      router.refresh();
    }
    if (response?.error) {
      // console.log(response.error, "-------error");
      setError(response.error);
    }
  };
  return (
    <form
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      onSubmit={handleSubmit}
    >
      <input name="email" className="border border-black" type="email" />
      <input name="password" type="password" className="border border-black" />
      <button type="submit">Login</button>
    </form>
  );
}
