import { useContext } from "react";
import { ThemeContext } from "../../_providers/index";
import Link from "next/link";
export default function MobileMenu() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`sm:hidden absolute top-16 w-[95%] flex flex-col bg-${appTheme}-bodyBg h-screen pt-20 gap-4`}
    >
      <Link
        href="/categories"
        className={`border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl text-${appTheme}-text`}
      >
        Categories
      </Link>
      <Link
        href="/products"
        className={`border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl text-${appTheme}-text`}
      >
        Products
      </Link>
      <Link
        href="/admin-panel"
        className={`border-2 border-${appTheme}-border rounded-lg h-16 flex items-center justify-center bg-${appTheme}-containerBg hover:bg-${appTheme}-bodyBg text-xl text-${appTheme}-text`}
      >
        Admin
      </Link>
    </div>
  );
}
