import { ThemeContext } from "../../_providers";
import { useEffect, useRef, useContext } from "react";
import { TechBadgeProps } from "@/app/_types";
import { TechBadge } from "../index";

type ProjectPanelProps = {
  title: string;
  link: string;
  badgeData: TechBadgeProps[];
};

const ProjectPanel = (props: ProjectPanelProps) => {
  const { title, link, badgeData } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`border-2 border-${appTheme}-border h-full rounded-lg flex flex-col`}
    >
      <div
        className={`h-24 bg-${appTheme}-containerBg rounded-t-md text-${appTheme}-secondary flex items-center justify-center text-[4vw]`}
      >
        {title}
      </div>
      <div className={`bg-${appTheme}-bodyBg grow`}>body</div>
      <div
        className={`h-40 bg-${appTheme}-containerBg rounded-b-md py-4 flex flex-row items-center justify-center`}
      >
        {badgeData.map((data, idx) => {
          return (
            <div key={idx} className="h-full w-[12vw] px-4">
              <TechBadge
                title={data.title}
                src={data.src}
                textSize={data.textSize}
                bgColor={data.bgColor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPanel;
