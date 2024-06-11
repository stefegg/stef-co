import { useContext } from "react";
import { ThemeContext } from "../../_providers/index";
import Link from "next/link";
export default function MobileMenu() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`sm:hidden sticky w-full flex flex-col bg-${appTheme}-bodyBg h-screen pt-20 px-4 gap-4`}
    >
      <Link
        href="/categories"
        className={`w-full border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl`}
      >
        Categories
      </Link>
      <Link
        href="/products"
        className={`w-full border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl`}
      >
        Products
      </Link>
      <Link
        href="/admin-panel"
        className={`w-full border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl`}
      >
        Admin
      </Link>
    </div>
  );
}
