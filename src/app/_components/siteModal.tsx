"use client";
import { useContext, useEffect } from "react";
import {
  ThemeContext,
  ModalContext,
  UserContext,
  CartContext,
} from "../_providers";
import Image from "next/image";
import { Session } from "next-auth";
import { CleanWishlist, SafeUser } from "../_types";

type SiteModalProps = {
  session: {
    session: Session;
    user: SafeUser;
    cleanWishlist: CleanWishlist | null;
  } | null;
};

export default function SiteModal(props: SiteModalProps) {
  const { session } = props;
  const { appTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const { setWishlist } = useContext(CartContext);
  const { showModal, setShowModal, modalType, modalContent } =
    useContext(ModalContext);

  useEffect(() => {
    if (session && session !== null) {
      setUser(session.user);
      setWishlist(session?.cleanWishlist?.wishlistItems || []);
    }
  }, [session]);

  const getModal = () => {
    switch (modalType) {
      case "image":
        return (
          <Image
            alt="image"
            src={modalContent}
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              opacity: "100%",
            }}
          />
        );
    }
  };
  return (
    showModal && (
      <div
        className={`absolute w-[87%] mt-16 h-[calc(100vh-4rem)] bg-${appTheme}-containerBg/50 top-0 flex items-center justify-center overflow-hidden`}
        onClick={() => setShowModal(false)}
      >
        <div>{getModal()}</div>
      </div>
    )
  );
}
