import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { TechBadge } from "../index";
import { projectsData } from "@/app/_utils/constants";

type ProjectPanelProps = {
  title: string;
  link: string;
  badgeData: [{ src: string; title: string }];
};

const ProjectPanel = (props: ProjectPanelProps) => {
  const { title, link, badgeData } = props;
  const { appTheme } = useContext(ThemeContext);

  return (
    <div
      className={`border-2 border-${appTheme}-border h-full rounded-lg flex flex-col`}
    >
      <div
        className={`h-24 bg-${appTheme}-containerBg rounded-t-md text-${appTheme}-secondary flex flex-row items-center justify-center py-4 gap-8`}
      >
        <div className={`text-5xl`}>{title}</div>
        <div className={`w-4 h-4 bg-${appTheme}-text rounded-full `} />
        <div className={`text-${appTheme}-link flex h-full items-end py-2`}>
          {link}
        </div>
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
                textSize={"xl"}
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
