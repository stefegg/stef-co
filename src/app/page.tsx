"use client";
import { Header, ReactCarousel, IntroTitle } from "./_components/index";
import { ThemeContext } from "./_providers";
import { useContext } from "react";

export default function Home() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className="h-full overflow-y-auto">
        <IntroTitle />
        <section
          className={`w-full flex flex-col items-center gap-4 min-h-screen overflow-y-auto pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text pb-4`}
        >
          <span className="h-1/2 px-10 md:px-40 w-full text-2xl mb-12 mt-10 font-extralight leading-9">
            Hello! Welcome to StefCo. I am Stef, a Software Engineer based in
            New Jersey.
            <br />
            I believe in building software that helps real people in their
            everyday lives.
            <br />
            To get started, check out some of the items in the sidebar/header.
            <br />
            Some of my tech stack is shown in the carousel below.
          </span>
          <div className="h-1/2 w-full px-10">
            <ReactCarousel />
          </div>
        </section>
      </div>
    </>
  );
}
