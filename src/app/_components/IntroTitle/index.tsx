"use client";
import { Logo } from "../index";
import { ThemeContext } from "../../_providers";
import { useContext, useRef, useEffect } from "react";
import { animate, inView, stagger } from "motion";

export default function IntroTitle() {
  const { appTheme } = useContext(ThemeContext);
  const firstSection = useRef<HTMLSpanElement>(null);
  const secondSection = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!firstSection.current || !secondSection.current) return;
    inView(firstSection.current, () => {
      animate(
        ".first-section-animation",
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 4,
          delay: stagger(0.1),
        }
      );
    });
    inView(firstSection.current, () => {
      animate(
        ".second-section-animation",
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 4,
          delay: stagger(0.1),
        }
      );
    });
  }, []);
  return (
    <section
      className={`w-full gap-4 h-screen overflow-y-auto bg-${appTheme}-bodyBg text-${appTheme}-text flex flex-col justify-center items-center`}
    >
      <span className="gap-10 flex items-center flex-col">
        <div className="w-1/2">
          <Logo size="large" text="Stef Egbert" />
        </div>
        <span
          className={
            "opacity-0 text-5xl md:text-7xl lg:text-9xl font-light first-section-animation"
          }
          ref={firstSection}
        >
          S O F T W A R E
        </span>
        <span
          className={
            "opacity-0 text-5xl md:text-7xl lg:text-9xl font-light second-section-animation"
          }
          ref={secondSection}
        >
          E N G I N E E R
        </span>
      </span>
    </section>
  );
}
