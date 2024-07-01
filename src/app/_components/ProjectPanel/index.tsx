"use client";
import { useRef, useEffect } from "react";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { TechBadge } from "../index";
import { BadgeData } from "@/app/_types";
import Link from "next/link";
import { inView, animate, stagger } from "motion";
type ProjectPanelProps = {
  title: string;
  link: string;
  bodyOne: string;
  bodyTwo: string;
  linkTitle: string;
  badgeData: BadgeData[];
};

const ProjectPanel = (props: ProjectPanelProps) => {
  const { title, link, badgeData, linkTitle, bodyOne, bodyTwo } = props;
  const { appTheme } = useContext(ThemeContext);
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const headerTitleRef = useRef<HTMLDivElement>(null);
  const headerDotRef = useRef<HTMLDivElement>(null);
  const headerLinkRef = useRef<HTMLDivElement>(null);
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  const bodyOneRef = useRef<HTMLDivElement>(null);
  const bodyTwoRef = useRef<HTMLDivElement>(null);
  const techCarouselRef = useRef<HTMLDivElement>(null);
  const techBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerContainerRef.current) return;
    inView(headerContainerRef.current, () => {
      if (!headerTitleRef.current) return;
      animate(
        headerTitleRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 2,
          delay: stagger(0.1),
        }
      );
      if (!headerDotRef.current) return;
      animate(
        headerDotRef.current,
        { opacity: 1, transform: "none" },
        {
          duration: 2,
          delay: stagger(0.1),
        }
      );
      if (!headerLinkRef.current) return;
      animate(
        headerLinkRef.current,
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
    if (!bodyContainerRef.current) return;
    inView(bodyContainerRef.current, () => {
      if (!bodyOneRef.current) return;
      animate(
        bodyOneRef.current,
        { opacity: 1, transform: "none" },
        { duration: 2, delay: stagger(0.1) }
      );
      if (!bodyTwoRef.current) return;
      animate(
        bodyTwoRef.current,
        { opacity: 1, transform: "none" },
        { duration: 2, delay: stagger(0.1) }
      );
    });
    if (!techCarouselRef.current) return;

    inView(techCarouselRef.current, () => {
      if (!techCarouselRef.current) return;

      animate(
        techCarouselRef.current,
        { opacity: 1 },
        { duration: 3, delay: stagger(0.2) }
      );
    });
  });

  return (
    <div
      className={`border-2 border-${appTheme}-border h-full rounded-lg flex flex-col overflow-hidden`}
    >
      <div
        className={`h-24 bg-${appTheme}-containerBg rounded-t-md text-${appTheme}-secondary flex flex-row items-center justify-center py-4 gap-8 overflow-hidden `}
        ref={headerContainerRef}
      >
        <div
          className={`text-xl md:text-5xl flex items-end md:items-center font-extralight opacity-0 translate-x-20 rotate-90 transition-all`}
          ref={headerTitleRef}
        >
          {title}
        </div>
        <div
          className={`hidden md:flex w-4 h-4 bg-${appTheme}-text rounded-full opacity-0 translate-y-4`}
          ref={headerDotRef}
        />
        <div
          className={`text-xl md:text-4xl text-${appTheme}-link flex h-full items-center md:items-end py-2 font-light opacity-0 -translate-x-20 -rotate-90 transition-all`}
          ref={headerLinkRef}
        >
          <Link href={link}>{linkTitle}</Link>
        </div>
      </div>
      <div
        className={`bg-${appTheme}-bodyBg grow sm:px-12 sm:py-6 text-${appTheme}-text gap-4 flex flex-col text-xs sm:text-sm lg:text-base xl:text-xl font-light overflow-hidden`}
        ref={bodyContainerRef}
      >
        <div
          className={`opacity-0 translate-y-10 overflow-y-auto text-xs md:text-sm lg:text-base xl:text-lg`}
          ref={bodyOneRef}
        >
          {(bodyOne && bodyOne) || null}
        </div>
        <div
          className={`opacity-0 translate-y-10 overflow-y-auto text-xs md:text-sm lg:text-base xl:text-lg`}
          ref={bodyTwoRef}
        >
          {(bodyTwo && bodyTwo) || null}
        </div>
      </div>
      <div
        className={`h-40 bg-${appTheme}-containerBg rounded-b-md py-4 gap-x-4 gap-y-2 grid grid-cols-3 md:gap-0 md:flex md:flex-row items-center justify-center opacity-0`}
        ref={techCarouselRef}
      >
        {badgeData.map((data, idx) => {
          return (
            <div key={`${data.title}-${idx}}`}>
              <div className="h-full w-[12vw] px-4 items-center justify-center hidden md:flex overflow-hidden">
                <TechBadge
                  title={data.title}
                  src={data.src}
                  textSize={"sm"}
                  bgColor={"bodyBg"}
                />
              </div>
              <div
                className={`md:hidden text-thin text-${appTheme}-secondary flex justify-center`}
              >
                {data.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPanel;
