import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, Header, SidebarCap } from "./_components";
import { ThemeProvider } from "./_providers/theme-provider";
import { CartProvider } from "./_providers/cart-provider";
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
    <ThemeProvider>
      <CartProvider>
        <html lang="en">
          <body className={`${interFont.className} flex flex-row`}>
            <div className="w-[13%] h-screen flex flex-col">
              <SidebarCap />
              <Sidebar />
            </div>
            <div className="w-[87%] max-h-screen overflow-scroll">
              <div className="absolute w-[87%]">
                <Header />
              </div>
              <div className="max-h-screen overflow-scroll pt-16">
                {children}
              </div>
            </div>
          </body>
        </html>
      </CartProvider>
    </ThemeProvider>
  );
}
