"use client";
import React from "react";
import Link from "next/link";
import { lobsterFont } from "../../fonts";
import { Logo } from "../index";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div
        className={`min-h-16 max-h-16 flex flex-col items-center justify-center  ${lobsterFont.className} w-full `}
      >
        <Logo size={"small"} text="StefCo" />
      </div>
    </Link>
  );
}
