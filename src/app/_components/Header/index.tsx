"use client";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col relative">
      <span
        className={`flex items-center p-6 fixed w-[100%] bg-bodyBg text-white justify-between
    `}
      >
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
      </span>
    </div>
  );
}
