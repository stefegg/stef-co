"use client";
import { ThemeContext } from "../../_providers";
import { useContext } from "react";
import { ProjectPanel } from "../index";
import { javascript } from "../../../../public/icons";
import { projectsData } from "@/app/_utils/constants";
import Carousel from "react-multi-carousel";

const IntroFourth = () => {
  const { appTheme } = useContext(ThemeContext);
  const responsive = {
    oneSizeFitsAll: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={`h-screen bg-${appTheme}-bodyBg overflow-hidden`}>
      <Carousel responsive={responsive} infinite>
        {projectsData.map((proj, idx) => {
          return (
            <div
              className="h-screen pt-28 px-12 pb-12"
              key={`${proj.title}-${idx}`}
            >
              <ProjectPanel
                title={proj.title}
                link={proj.link}
                badgeData={proj.badgeData}
              />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default IntroFourth;
