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
      className={`text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg  overflow-auto min-w-full max-w-full h-screen`}
    >
      <Header />
      <div className="px-8 pt-6 pb-6 mt-16">{children}</div>
    </div>
  );
}
