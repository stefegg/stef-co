"use client";
import TechCarousel from "../TechCarousel";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../_providers";
import { animate, inView, stagger } from "motion";

export default function IntroSecond() {
  const { appTheme } = useContext(ThemeContext);
  const firstDiv = useRef<HTMLDivElement>(null);
  const secondDiv = useRef<HTMLDivElement>(null);
  const thirdDiv = useRef<HTMLDivElement>(null);
  const fourthDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !firstDiv.current ||
      !secondDiv.current ||
      !thirdDiv.current ||
      !fourthDiv.current
    )
      return;
    inView(firstDiv.current, () => {
      if (!firstDiv.current) return;
      animate(
        firstDiv.current,
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
    inView(secondDiv.current, () => {
      if (!secondDiv.current) return;
      animate(
        secondDiv.current,
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
    inView(thirdDiv.current, () => {
      if (!thirdDiv.current) return;
      animate(
        thirdDiv.current,
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
    inView(fourthDiv.current, () => {
      if (!fourthDiv.current) return;
      animate(
        fourthDiv.current,
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
    <section
      className={`w-full flex flex-col items-center gap-4 min-h-screen overflow-y-auto pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text pb-4`}
    >
      <span className="h-1/2 px-10 lg:px-40 w-full text-lg sm:text-xl md:text-2xl mb-4 mt-10 font-extralight gap-4 flex flex-col">
        <div className="oveflow-hidden inline-block leading-[4vw]">
          <div
            ref={firstDiv}
            className="inline-block leading-[4vw] opacity-0 translate-y-[4vw]"
          >
            Hello! Welcome to StefCo. I am Stef, a Software Engineer based in
            New Jersey.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-[4vw]">
          <div
            ref={secondDiv}
            className="inline-block leading-[4vw] opacity-0 translate-y-[4vw]"
          >
            I believe in building software that helps real people in their
            everyday lives.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-[4vw]">
          <div
            ref={thirdDiv}
            className="inline-block leading-[4vw] opacity-0 translate-y-[4vw]"
          >
            I excel in fast paced delivery driven collaborative environments.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-[4vw]">
          <div
            ref={fourthDiv}
            className="inline-block leading-[4vw] opacity-0 translate-y-[4vw]"
          >
            Some of my tech stack is shown in the carousel below.
          </div>
        </div>
      </span>
      <div className="grow w-full px-10">
        <TechCarousel />
      </div>
    </section>
  );
}
