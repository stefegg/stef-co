"use client";
import {
  Logo,
  PageWrapper,
  Header,
  ReactCarousel,
  Sun,
} from "./_components/index";
import { ThemeContext } from "./_providers";
import { useContext } from "react";

export default function Home() {
  const { appTheme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div
        className={`w-full flex flex-col items-center gap-4 min-h-screen overflow-y-auto pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text`}
      >
        <div className="h-1/3 gap-4">
          <div className="my-4">
            <Logo size="large" text="Stef Egbert" />
          </div>
          <div className={"animate-[appear_4000ms] text-6xl "}>
            S O F T W A R E
          </div>
          <div className={"animate-[appear_4000ms] text-6xl "}>
            E N G I N E E R
          </div>
        </div>

        <div className="h-1/3 text-xl px-10 w-full">
          Hello! Welcome to StefCo. I am Stef, a Software Engineer based in New
          Jersey. To get started, check out some of the items in the
          sidebar/header. Some of my tech stack is shown in the carousel below.
        </div>
        <div className="h-1/3 w-full px-10">
          <ReactCarousel />
        </div>
      </div>
    </>
  );
}
