import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { robotoFont } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "./_components";
export const metadata: Metadata = {
  title: "Stef Co.",
  description: "Created by Stef",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} `}>
        <div className="w-[100%] h-full max-h-screen flex">
          <Header />
          <div className="h-screen pt-20">{children}</div>
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
