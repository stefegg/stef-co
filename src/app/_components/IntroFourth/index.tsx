"use client";
import { ThemeContext } from "../../_providers";
import { useEffect, useRef, useContext } from "react";

const IntroFourth = () => {
  const { appTheme } = useContext(ThemeContext);

  return (
    <section className={`h-screen bg-${appTheme}-bodyBg`}>
      <div>hi</div>
    </section>
  );
};

export default IntroFourth;
