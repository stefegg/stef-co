"use client";
import { Logo, PageWrapper, Sun } from "./_components/index";

export default function Home() {
  return (
    <main className={`flex flex-col w-full items-center`}>
      <PageWrapper>
        <div className="w-full flex flex-col items-center gap-4 h-[calc(100vh-7rem)] border-b-2 border-red-500 overflow-y-auto">
          <div className="my-4">
            <Logo size="large" text="Stef Egbert" />
          </div>
          <div className={"animate-[appear_4000ms] text-6xl "}>
            S O F T W A R E
          </div>
          <div className={"animate-[appear_4000ms] text-6xl "}>
            E N G I N E E R
          </div>
          <div className="w-1/2 text-xl px-2">
            Hello! Welcome to StefCo. This is not an actual storefront, this is
            my software engineering portfolio site. To get started check out
            some of the items in the sidebar / header. You do not need to
            register an account to place an order, but you are welcome to do so.
          </div>
          {/* <Sun /> */}
        </div>
      </PageWrapper>
    </main>
  );
}
