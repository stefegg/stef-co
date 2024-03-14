import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/sideBar";
import { Header } from "./components/header";
import { ThemeProvider } from "./providers/theme-provider";
import { interFont } from "./fonts";
import { SidebarCap } from "./components/sidebarCap";

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
      <html lang="en">
        <body className={`${interFont.className} flex flex-row`}>
          <div className="w-[13%] h-screen flex flex-col">
            <SidebarCap />
            <Sidebar />
          </div>
          <div className="w-[87%]">
            <div className="-ml-[2px]">
              <Header />
            </div>
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
