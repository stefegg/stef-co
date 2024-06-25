"use client";
import { ThemeContext } from "../../_providers/index";
import { ReactElement, useContext } from "react";
import Header from "../Header";

type PageWrapperProps = {
  children: ReactElement | ReactElement[];
};

export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg min-w-full max-w-full min-h-screen`}
    >
      <div className="px-6 sm:px-10 pb-6 pt-20 min-h-[calc(100vh-5rem)]">
        {children}
      </div>
    </div>
  );
}
