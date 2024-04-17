"use client";
import { PageWrapper } from "../_components";
import { ThemeContext } from "../_providers";
import { useContext } from "react";
import Image from "next/image";
import self from "./self.jpg";

export default function AboutPage() {
  const { appTheme } = useContext(ThemeContext);
  return (
    <PageWrapper>
      <div className="p-8">
        <div className={`p-6  flex flex-row gap-6`}>
          {/* <div className={`rounded-md  border-${appTheme}-secondary border-2`}> */}
          <Image
            src={self}
            alt="self"
            width={0}
            height={0}
            quality={100}
            unoptimized
            style={{ width: "30%", height: "40%", borderRadius: "6px" }}
          />
          {/* </div> */}
          <div className="w-2/3 text-xl gap-4 flex flex-col">
            <div>
              Thanks for visiting Stef-Co. As you probably know, this is not an
              actual shop for anything. This is a for fun / porfolio project for
              me - Stef, a 5 + year software developer based in Middletown New
              Jersey.
            </div>
            <div>
              This site was created using React, TypeScript, Next.Js,
              Tailwind.css, Prisma, and Postgres. Right now you can create an
              account, add items to your wishlist, place orders, and find past
              orders. These experiences are different based on whether or not
              you have an account, for example a registered user has to log in
              to view their past orders, and their wishlist is saved for them.
            </div>

            <div>
              The products you see here are just fun things that I or my dog
              Hopper enjoys. There are still many features to come, including
              payment processing, persisting site theme for users, user password
              resetting, inventory management, product creation and more.
            </div>
            <div>
              I hope you have enjoyed your visit, if you would like to reach
              out, shoot me an e-mail at{" "}
              <a
                className={`text-${appTheme}-link`}
                href={`mailto:stephenegbert@gmail.com`}
              >
                stephenegbert@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
