"use client";
import {
  Header,
  IntroTitle,
  IntroSecond,
  IntroThird,
  IntroFourth,
  IntroFifth,
} from "./_components/index";
import { ThemeContext } from "./_providers";
import { useContext } from "react";

export default function Home() {
  const { appTheme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div className={`h-full overflow-y-auto bg-${appTheme}-bodyBg`}>
        <IntroTitle />
        <IntroSecond />
        <IntroThird />
        <IntroFourth />
        <IntroFifth />
      </div>
    </>
  );
}
