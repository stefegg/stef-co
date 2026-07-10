import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { robotoFont } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import Header from "./_components/Header";
import ThemeSwitcher from "./_components/ThemeSwitcher";
const siteUrl = "https://www.stef-co.com";
const description =
  "Portfolio of Stephen Egbert, a Senior Frontend Engineer with 7+ years building React, TypeScript, and Next.js applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stephen Egbert | Senior Frontend Engineer",
    template: "%s | Stephen Egbert",
  },
  description,
  openGraph: {
    title: "Stephen Egbert | Senior Frontend Engineer",
    description,
    url: siteUrl,
    siteName: "Stef Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Egbert | Senior Frontend Engineer",
    description,
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCookie = (await cookies()).get("theme")?.value;
  const dataTheme =
    themeCookie && ["dark", "light", "ember", "aurora"].includes(themeCookie)
      ? themeCookie
      : undefined;
  return (
    <html lang="en" data-theme={dataTheme}>
      <body className={`${robotoFont.className} `}>
        <div className="w-full h-full max-h-screen flex bg-background text-lg font-light">
          <Header />
          <div
            tabIndex={0}
            className="h-screen overflow-auto w-full pt-20 pb-16 scroll-pt-20"
          >
            {children}
          </div>
          <ThemeSwitcher initialTheme={dataTheme} />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
