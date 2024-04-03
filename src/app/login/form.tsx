"use client";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!response?.error) {
      router.push("/");
      router.refresh();
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
