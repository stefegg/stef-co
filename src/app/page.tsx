"use client";
import { Logo } from "./_components";
import { useRef, useEffect } from "react";
import { animate, inView, stagger } from "motion";

const Home = () => {
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

  return (
    <section
      className={`h-full overflow-y-auto text-primary flex flex-col items-center justify-center`}
    >
      <span className="gap-10 flex items-center flex-col">
        <div className="w-full lg:w-1/2 ">
          <Logo size="large" text="Stef Egbert" />
        </div>
        <span
          className={
            "opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light first-section-animation"
          }
          ref={firstSection}
          style={{
            textShadow: `2px 2px 0px #23d1f6, 5px 4px 0px rgba(0,0,0,0.15)`,
          }}
        >
          S O F T W A R E
        </span>
        <span
          className={
            "opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light second-section-animation"
          }
          ref={secondSection}
          style={{
            textShadow: `2px 2px 0px #23d1f6, 5px 4px 0px rgba(0,0,0,0.15)`,
          }}
        >
          E N G I N E E R
        </span>
      </span>
    </section>
  );
};

export default Home;
