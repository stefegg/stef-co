"use client";
import ReactCarousel from "../ReactCarousel";
import { useContext } from "react";
import { ThemeContext } from "../../_providers";

export default function IntroSecond() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <section
      className={`w-full flex flex-col items-center gap-4 min-h-screen overflow-y-auto pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text pb-4`}
    >
      <span className="h-1/2 px-10 md:px-40 w-full text-2xl mb-12 mt-10 font-extralight leading-9">
        <div>
          Hello! Welcome to StefCo. I am Stef, a Software Engineer based in New
          Jersey.
        </div>

        <br />
        <div>
          I believe in building software that helps real people in their
          everyday lives.
        </div>

        <br />
        <div>I excel in fast paced collaborative environments.</div>
        <br />
        <div>Some of my tech stack is shown in the carousel below.</div>
      </span>
      <div className="h-1/2 w-full px-10">
        <ReactCarousel />
      </div>
    </section>
  );
}
