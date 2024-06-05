"use client";
import { ThemeContext } from "../_providers/index";
import { ReactElement, useContext } from "react";
import Header from "./header";

type PageWrapperProps = {
  children: ReactElement | ReactElement[];
};

export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg  min-w-full max-w-full min-h-screen`}
    >
      <Header />
      <div className="px-4 sm:px-8 pb-6 mt-20">{children}</div>
    </div>
  );
}
