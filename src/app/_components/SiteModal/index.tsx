"use client";
import { useContext, useEffect } from "react";
import {
  ThemeContext,
  ModalContext,
  UserContext,
  CartContext,
} from "../../_providers";
import Image from "next/image";
import { Session } from "next-auth";
import { CleanWishlist, SafeUser } from "../../_types";
import { LandingModal } from "../index";
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
              width: "75%",
              height: "75%",
              objectFit: "contain",
              borderRadius: "8px",
              opacity: "100%",
            }}
          />
        );
      case "landing":
        return <LandingModal />;
    }
  };
  return (
    showModal && (
      <div
        className={`absolute w-full h-full bg-${appTheme}-containerBg/50 top-0  overflow-hidden cursor-pointer bg-opacity-80`}
        onClick={() => setShowModal(false)}
      >
        <div className="flex items-center justify-center h-full">
          {getModal()}
        </div>
      </div>
    )
  );
}
