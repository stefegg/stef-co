"use client";
import { useContext } from "react";
import { ThemeContext, ModalContext } from "../_providers";
import Image from "next/image";
export default function SiteModal() {
  const { appTheme } = useContext(ThemeContext);
  const { showModal, setShowModal, modalType, modalContent } =
    useContext(ModalContext);

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
