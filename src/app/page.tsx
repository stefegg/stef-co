"use client";
import Logo from "./_components/Logo";
import { useRef, useEffect } from "react";
import { animate } from "motion/mini";
import { inView, stagger } from "motion";

const Home = () => {
  const firstSection = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!firstSection.current || !secondSection.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const reveal = (selector: string) =>
      animate(
        selector,
        { opacity: 1, transform: "none" },
        prefersReduced ? { duration: 0 } : { duration: 3, delay: stagger(0.1) },
      );
    if (prefersReduced) {
      reveal(".first-section-animation");
      reveal(".second-section-animation");
      return;
    }

    inView(firstSection.current, () => {
      reveal(".first-section-animation");
    });
    inView(secondSection.current, () => {
      reveal(".second-section-animation");
    });
  }, []);

  return (
    <section
      className={`h-full overflow-y-auto text-primary flex flex-col items-center justify-center`}
    >
      <h1 className="sr-only">Stef Egbert — Software Engineer</h1>
      <div className="gap-10 flex items-center flex-col">
        <div className="w-full lg:w-1/2 ">
          <Logo text="Stef Egbert" />
        </div>
        <div
          aria-hidden
          className={
            "opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light first-section-animation"
          }
          ref={firstSection}
          style={{
            textShadow: `var(--hero-shadow)`,
          }}
        >
          S O F T W A R E
        </div>
        <div
          aria-hidden
          className={
            "opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light second-section-animation"
          }
          ref={secondSection}
          style={{
            textShadow: `var(--hero-shadow)`,
          }}
        >
          E N G I N E E R
        </div>
      </div>
    </section>
  );
};

export default Home;
