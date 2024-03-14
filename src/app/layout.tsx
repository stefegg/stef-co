import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/sideBar";
import { Header } from "./components/header";
import { ThemeProvider } from "./providers/theme-provider";
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
      <html lang="en">
        <body className={`${interFont.className} flex flex-row`}>
          <Sidebar />
          <div className="w-[87%]">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
