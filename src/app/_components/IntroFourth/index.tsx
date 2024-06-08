"use client";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { ProjectPanel } from "../index";
import { javascript } from "../../../../public/icons";
import { projectsData } from "@/app/_utils/constants";

const IntroFourth = () => {
  const { appTheme } = useContext(ThemeContext);

  return (
    <section
      className={`h-screen pt-28 px-12 pb-12 bg-${appTheme}-bodyBg overflow-hidden`}
    >
      {projectsData.map((proj, idx) => {
        return (
          <ProjectPanel
            title={proj.title}
            link={proj.link}
            badgeData={proj.badgeData}
          />
        );
      })}
    </section>
  );
};

export default IntroFourth;
