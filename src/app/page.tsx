import React from "react";
import { lobsterFont } from "./fonts";
import { Logo } from "./_components/index";

export default function Home() {
  return (
    <main
      className={`${lobsterFont.className} flex h-screen flex-col items-center`}
    >
      <Logo size="large" />
    </main>
  );
}
