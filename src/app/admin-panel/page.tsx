"use client";
import Link from "next/link";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
import { PageWrapper } from "../_components";

export default function AdminPanel() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <div>
        WIP
        <Link
          href="/admin-panel/dashboard"
          className={`min-w-full flex justify-center hover:bg-${appTheme}-containerBg rounded-md p-2 `}
        >
          Dashboard
        </Link>
        <Link
          href="/admin-panel/create-product"
          className={`min-w-full flex justify-center hover:bg-${appTheme}-containerBg rounded-md p-2 `}
        >
          Create New Product
        </Link>
        <Link
          href="/admin-panel/edit-product"
          className={`min-w-full flex justify-center hover:bg-${appTheme}-containerBg rounded-md p-2 `}
        >
          Edit Product
        </Link>
      </div>
    </PageWrapper>
  );
}
