import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, SidebarCap } from "./_components";
import {
  ThemeProvider,
  CartProvider,
  BannerProvider,
  UserProvider,
} from "./_providers/index";
import { ptSansFont } from "./fonts";
import { getServerSession } from "next-auth";
import { findUser, getWishlist } from "./_utils/serverutils";

export const metadata: Metadata = {
  title: "Stef Co.",
  description: "Created by Stef",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getSetSessionUser = async () => {
    const session = await getServerSession();
    if (session && session.user && session.user.name) {
      const user = await findUser(session.user.name);
      const wishlist = await getWishlist(session.user.name);
      return { session, user, cleanWishlist: wishlist };
    } else return null;
  };
  const session = await getSetSessionUser();
  return (
    <UserProvider>
      <BannerProvider>
        <ThemeProvider>
          <CartProvider>
            <html lang="en">
              <body className={`${ptSansFont.className} flex flex-row`}>
                <div className="w-[13%] h-screen flex flex-col">
                  <SidebarCap session={session} />
                  <Sidebar />
                </div>
                <div className="w-[87%] h-full max-h-screen overflow-y-auto overflow-x-hidden">
                  {children}
                </div>
              </body>
            </html>
          </CartProvider>
        </ThemeProvider>
      </BannerProvider>
    </UserProvider>
  );
}
