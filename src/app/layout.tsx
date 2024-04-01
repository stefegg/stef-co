import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, Header, SidebarCap, Cart } from "./_components";
import {
  ThemeProvider,
  CartProvider,
  BannerProvider,
} from "./_providers/index";
import { interFont } from "./fonts";

export const metadata: Metadata = {
  title: "Stef Co.",
  description: "Created by Stef",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BannerProvider>
      <ThemeProvider>
        <CartProvider>
          <html lang="en">
            <body className={`${interFont.className} flex flex-row`}>
              <div className="w-[13%] h-screen flex flex-col">
                <SidebarCap />
                <Sidebar />
              </div>
              <div className="w-[87%] max-h-screen overflow-scroll">
                <div className="absolute w-[87%] h-full overflow-x-hidden">
                  <Header />
                </div>
                <div className="min-h-[calc(100vh-4rem)] overflow-y-scroll overflow-x-hidden mt-16 flex flex-row relative">
                  {children}
                </div>
              </div>
            </body>
          </html>
        </CartProvider>
      </ThemeProvider>
    </BannerProvider>
  );
}
