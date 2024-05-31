"use client";
import Link from "next/link";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";

export default function AdminPanel() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div>
      <Link
        href="/admin-panel/dashboard"
        className={`min-w-full flex justify-center hover:bg-${appTheme}-bodyBg rounded-md p-2 `}
      >
        Dashboard
      </Link>
    </div>
  );
}
