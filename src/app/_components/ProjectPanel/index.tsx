import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { TechBadge } from "../index";
import { BadgeData } from "@/app/_types";
import Link from "next/link";

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

  return (
    <div
      className={`border-2 border-${appTheme}-border h-full rounded-lg flex flex-col`}
    >
      <div
        className={`h-24 bg-${appTheme}-containerBg rounded-t-md text-${appTheme}-secondary flex flex-row items-center justify-center py-4 gap-8`}
      >
        <div
          className={`text-xl md:text-5xl flex items-end md:items-center font-extralight`}
        >
          {title}
        </div>
        <div
          className={`hidden md:flex w-4 h-4 bg-${appTheme}-text rounded-full `}
        />
        <div
          className={`text-xl md:text-4xl text-${appTheme}-link flex h-full items-center md:items-end py-2 font-light`}
        >
          <Link href={link}>{linkTitle}</Link>
        </div>
      </div>
      <div
        className={`bg-${appTheme}-bodyBg grow sm:px-12 sm:py-6 text-${appTheme}-text gap-4 flex flex-col text-xs sm:text-sm lg:text-base xl:text-xl font-light`}
      >
        <div>{(bodyOne && bodyOne) || null}</div>
        <div>{(bodyTwo && bodyTwo) || null}</div>
      </div>
      <div
        className={`h-40 bg-${appTheme}-containerBg rounded-b-md py-4 flex flex-row items-center justify-center`}
      >
        <div
          className={`grid grid-cols-3 md:flex gap-x-4 gap-y-2 md:gap-0 h-full`}
        >
          {badgeData.map((data, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className="h-full w-[12vw] px-4 items-center justify-center hidden md:flex"
                >
                  <TechBadge
                    title={data.title}
                    src={data.src}
                    textSize={"sm"}
                    bgColor={"bodyBg"}
                  />
                </div>
                <div
                  className={`md:hidden text-thin text-${appTheme}-secondary`}
                >
                  {data.title}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
