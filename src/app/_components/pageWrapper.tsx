"use client";
import { ThemeContext } from "../_providers/index";
import { ReactElement, useContext } from "react";
type PageWrapperProps = {
  children: ReactElement | ReactElement[];
};

export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  const { appTheme } = useContext(ThemeContext);
  return (
    <div
      className={`text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg px-8 pt-6 pb-4 pl-10 min-h-[calc(100vh-4rem)] min-w-full max-w-full`}
    >
      {children}
    </div>
  );
}
