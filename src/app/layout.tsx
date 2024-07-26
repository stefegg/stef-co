import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SiteModal } from "./_components";
import {
  ThemeProvider,
  CartProvider,
  BannerProvider,
  UserProvider,
  ModalProvider,
} from "./_providers/index";
import { robotoFont } from "./fonts";
import { getServerSession } from "next-auth";
import { findUser, getWishlist } from "./_utils/serverutils";
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
    <ModalProvider>
      <UserProvider>
        <BannerProvider>
          <ThemeProvider>
            <CartProvider>
              <html lang="en">
                <body className={`${robotoFont.className} flex flex-row `}>
                  <div className="w-[100%] h-full max-h-screen ">
                    <Header />
                    {children}
                    <SiteModal session={session} />
                    <Analytics />
                    <SpeedInsights />
                  </div>
                </body>
              </html>
            </CartProvider>
          </ThemeProvider>
        </BannerProvider>
      </UserProvider>
    </ModalProvider>
  );
}
