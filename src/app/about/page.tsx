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
        <div className={`p-6 flex flex-col sm:flex-row gap-6`}>
          <Image
            src={self}
            alt="self"
            width={0}
            height={0}
            quality={100}
            unoptimized
            className="sm:w-[30%] w-full"
            style={{ height: "40%", borderRadius: "6px" }}
          />
          <div className="w-full sm:w-2/3 text-xl gap-4 flex flex-col">
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
        <div className={`pl-6 `}>
          <div
            className={`p-2 text-xl border border-${appTheme}-text border-b-0`}
          >
            Projects of Note:
          </div>
          <div
            className={`p-2 grid grid-cols-2 border border-${appTheme}-text text-lg gap-4`}
          >
            <div className="flex flex-col ">
              <div className={`text-${appTheme}-secondary`}>Stripe Hotel</div>
              <a
                href={`https://github.com/stefegg/stripe-hotel`}
                className={`text-${appTheme}-link`}
              >
                View Github Repo
              </a>
            </div>
            <div>
              A single page react app I developed a couple of years ago. I used
              React and a basic Node / Express backend. Frontend libraries used
              were styled-components, yup, formik and recoil. It also features
              integration with Stripe for payment processing, which was a pretty
              fun and easy process to figure out. Recoil is basically the same
              idea as React context - it is used to share state across a
              project. This was a big state management experiment, most of what
              happens in this project takes place in two files, and what you see
              is determined by whether or not you have something in your
              shopping cart.
            </div>
            <div className="flex flex-col ">
              <div className={`text-${appTheme}-secondary`}>
                Looksee Property Solutions
              </div>
              <a
                href={`https://www.looksee.co.za`}
                className={`text-${appTheme}-link`}
              >
                View Project
              </a>
            </div>
            <div>
              A project developed with my former team at Jigsaw XYZ Inc. We
              built this over a few months for our client Standard Bank, South
              Africa. The client base was experiencing daily power and water
              outages as part of load shedding efforts. This platform would
              inform them of when these were gonig to take place, and assist
              them in dealing with these issues. My contribution was to craft
              much of the UI still visible on the marketplace - where things
              like power generators and water tanks are sold. I used
              React/Typescript, Styled-Components and Redux/Recoil when building
              out my features.
            </div>
            <div className="flex flex-col ">
              <div className={`text-${appTheme}-secondary`}>
                Personal Pokedex
              </div>
              <a
                href={`https://stefegg.github.io/pokedex/`}
                className={`text-${appTheme}-link`}
              >
                View Project
              </a>
            </div>
            <div>
              This is a very old project, probably one of the first I ever made.
              But it is where I learned to integrate with APIs, something that
              is still important to this day. Learning to deal with data, filter
              through it to get what I needed and display it on a page is a
              lesson I will never forget. And it still looks good! Even if it is
              just basic HTML/CSS, I am proud of it and how far I have come
              since I made it.
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
