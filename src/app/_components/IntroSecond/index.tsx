"use client";
import ReactCarousel from "../ReactCarousel";
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
          delay: stagger(0.1),
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
          delay: stagger(0.1),
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
          delay: stagger(0.1),
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
          delay: stagger(0.1),
        }
      );
    });
  });
  return (
    <section
      className={`w-full flex flex-col items-center gap-4 min-h-screen overflow-y-auto pt-16 bg-${appTheme}-bodyBg text-${appTheme}-text pb-4`}
    >
      <span className="h-1/2 px-10 md:px-40 w-full text-2xl mb-12 mt-10 font-extralight leading-9 gap-4 flex flex-col">
        <div className="oveflow-hidden inline-block leading-9">
          <div
            ref={firstDiv}
            className="inline-block leading-9 opacity-0 translate-y-9"
          >
            Hello! Welcome to StefCo. I am Stef, a Software Engineer based in
            New Jersey.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-9">
          <div
            ref={secondDiv}
            className="inline-block leading-9 opacity-0 translate-y-9"
          >
            I believe in building software that helps real people in their
            everyday lives.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-9">
          <div
            ref={thirdDiv}
            className="inline-block leading-9 opacity-0 translate-y-9"
          >
            I excel in fast paced delivery driven collaborative environments.
          </div>
        </div>
        <div className="oveflow-hidden inline-block leading-9">
          <div
            ref={fourthDiv}
            className="inline-block leading-9 opacity-0 translate-y-9"
          >
            Some of my tech stack is shown in the carousel below.
          </div>
        </div>
      </span>
      <div className="h-1/2 w-full px-10">
        <ReactCarousel />
      </div>
    </section>
  );
}
