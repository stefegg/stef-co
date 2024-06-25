"use client";
import TechCarousel from "../TechCarousel";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../_providers";
import { animate, inView, stagger } from "motion";

export default function IntroSecond() {
  const { appTheme } = useContext(ThemeContext);

  type RisingTextProps = {
    text: string;
  };

  const RisingText = (props: RisingTextProps) => {
    const { text } = props;
    const risingText = useRef<HTMLDivElement>(null);
    const risingWrapper = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!risingWrapper.current) return;
      inView(risingWrapper.current, () => {
        if (!risingText.current) return;
        animate(
          risingText.current,
          {
            opacity: 1,
            transform: "none",
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
        );
      });
    });
    return (
      <div
        className="oveflow-hidden inline-block leading-[4vw]"
        ref={risingWrapper}
      >
        <div
          ref={risingText}
          className="inline-block leading-[4vw] opacity-0 translate-y-[4vw]"
        >
          {text}
        </div>
      </div>
    );
  };

  return (
    <section
      className={`w-full flex flex-col items-center gap-4 h-screen pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text pb-4 overflow-hidden`}
    >
      <div className="h-1/2 px-10 lg:px-40 w-full text-lg sm:text-xl md:text-2xl mb-4 mt-10 font-extralight gap-4 flex flex-col">
        <RisingText
          text="Hello! Welcome to StefCo. My name is Stef, a Software Engineer based in
            New Jersey."
        />
        <RisingText
          text="I'm on a mission to build software that helps real people in their
            everyday lives."
        />
        <RisingText text="I excel in fast paced delivery driven collaborative environments. " />
        <RisingText text="An adventurer at heart, I love coding, learning and trying new things. Some of my tech stack is shown in the carousel below." />
      </div>
      <div className="grow w-full px-10">
        <TechCarousel />
      </div>
    </section>
  );
}
