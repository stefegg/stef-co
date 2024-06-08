"use client";
import { ThemeContext } from "../../_providers";
import { useEffect, useRef, useContext } from "react";
import { ProjectPanel } from "../index";
import { javascript } from "../../../../public/icons";

const IntroFourth = () => {
  const { appTheme } = useContext(ThemeContext);

  return (
    <section className={`h-screen pt-28 px-12 pb-12 bg-${appTheme}-bodyBg`}>
      <ProjectPanel
        title="title"
        link="link"
        badgeData={[
          {
            src: javascript,
            title: "title",
            textSize: "xl",
            bgColor: "bodyBg",
          },
        ]}
      />
    </section>
  );
};

export default IntroFourth;
