"use client";
import { Logo } from "../index";
import { ThemeContext } from "../../_providers";
import { useContext, useRef, useEffect } from "react";
import { animate, inView, stagger } from "motion";
import {
  sunHorizonDark,
  sunHorizonLight,
  sunHorizonClassic,
} from "../../../../public/icons";

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
    inView(secondSection.current, () => {
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

  const getSun = () => {
    switch (appTheme) {
      case "dark":
        return sunHorizonDark;
      case "light":
        return sunHorizonLight;
      case "classic":
        return sunHorizonClassic;
    }
  };

  const getTextShadow = () => {
    switch (appTheme) {
      case "dark":
        return "#3700b3";
      case "light":
        return "#005faf";
      case "classic":
        return "#FDB813";
    }
  };
  return (
    <section
      className={`w-full h-screen overflow-y-auto bg-${appTheme}-bodyBg text-${appTheme}-text flex flex-col justify-center items-center `}
      style={{
        backgroundImage: `url(${getSun().src})`,
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
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
          style={{
            textShadow: `2px 2px 0px ${getTextShadow()}, 5px 4px 0px rgba(0,0,0,0.15)`,
          }}
        >
          S O F T W A R E
        </span>
        <span
          className={
            "opacity-0 text-5xl md:text-7xl lg:text-9xl font-light second-section-animation"
          }
          ref={secondSection}
          style={{
            textShadow: `2px 2px 0px ${getTextShadow()}, 5px 4px 0px rgba(0,0,0,0.15)`,
          }}
        >
          E N G I N E E R
        </span>
      </span>
    </section>
  );
}
