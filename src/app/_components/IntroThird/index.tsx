"use client";
import { useEffect, useRef, useContext } from "react";
import { animate, inView, scroll } from "motion";
import { ThemeContext } from "../../_providers";

const IntroThird = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLSpanElement>(null);
  const { appTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (!projectContainerRef.current) return;
    inView(projectContainerRef.current, () => {
      if (!projectRef.current) return;
      scroll(
        animate(
          projectRef.current,
          {
            x: [-600, 600],
            y: [-200, 200],
          },
          {
            duration: 2.0,
          }
        ),
        {
          target: projectRef.current,
        }
      );
    });
  }, []);

  const getTextShadow = () => {
    switch (appTheme) {
      case "dark":
        return "#000000";
      case "light":
        return "#0564b8";
      case "classic":
        return "#363636";
    }
  };

  return (
    <section
      ref={projectContainerRef}
      className={`h-screen overflow-hidden flex items-center justify-center bg-${appTheme}-bodyBg text-${appTheme}-secondary`}
    >
      <span
        ref={projectRef}
        className="text-[12vw] uppercase font-thin"
        style={{
          textShadow: `2px 2px 0px ${getTextShadow()}, 5px 4px 0px rgba(0,0,0,0.15)`,
        }}
      >
        Projects
      </span>
    </section>
  );
};

export default IntroThird;
