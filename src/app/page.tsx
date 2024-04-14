import React from "react";
import { lobsterFont } from "./fonts";
import { Logo, PageWrapper } from "./_components/index";

export default function Home() {
  return (
    <main
      className={`${lobsterFont.className} flex flex-col w-full items-center`}
    >
      <PageWrapper>
        <div className="flex flex-row w-full justify-center">
          <div className="w-1/4">
            <Logo size="large" />
          </div>
        </div>
      </PageWrapper>
    </main>
  );
}
