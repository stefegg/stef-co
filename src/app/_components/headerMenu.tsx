"use client";
import React from "react";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

type HeaderMenuProps = {
  setShowDrop: Dispatch<SetStateAction<boolean>>;
  session: Session | null;
};

export default function HeaderMenu(props: HeaderMenuProps) {
  const { setShowDrop, session } = props;
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <div
      className={`flex flex-row  w-[225px] border-2 rounded-md py-4 text-${appTheme}-text border-${appTheme}-border bg-${appTheme}-bodyBg`}
      onMouseLeave={() => setShowDrop(false)}
    >
      {session ? (
        <div
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </div>
      ) : (
        <div onClick={() => router.push("/login")}>Log In</div>
      )}
    </div>
  );
}
