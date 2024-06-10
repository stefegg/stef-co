import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { TechBadge } from "../index";
import { BadgeData } from "@/app/_types";
import Link from "next/link";

type ProjectPanelProps = {
  title: string;
  link: string;
  linkTitle: string;
  badgeData: BadgeData[];
};

const ProjectPanel = (props: ProjectPanelProps) => {
  const { title, link, badgeData, linkTitle } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`border-2 border-${appTheme}-border h-full rounded-lg flex flex-col`}
    >
      <div
        className={`h-24 bg-${appTheme}-containerBg rounded-t-md text-${appTheme}-secondary flex flex-row items-center justify-center py-4 gap-8`}
      >
        <div className={`text-xl md:text-5xl flex items-end md:items-center`}>
          {title}
        </div>
        <div
          className={`hidden md:flex w-4 h-4 bg-${appTheme}-text rounded-full `}
        />
        <div
          className={`text-xl md:text-4xl text-${appTheme}-link flex h-full items-center md:items-end py-2`}
        >
          <Link href={link}>{linkTitle}</Link>
        </div>
      </div>
      <div
        className={`bg-${appTheme}-bodyBg grow px-12 py-6 text-${appTheme}-text`}
      >
        body
      </div>
      <div
        className={`h-40 bg-${appTheme}-containerBg rounded-b-md py-4 flex flex-row items-center justify-center`}
      >
        {badgeData.map((data, idx) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPanel;
