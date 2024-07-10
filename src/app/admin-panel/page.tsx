"use client";
import Link from "next/link";
import { ThemeContext } from "../_providers/index";
import { useContext } from "react";
import { PageWrapper } from "../_components";
import { editProduct, newProduct, dashboard } from "../../../public/icons";
import { getFilter } from "../_utils";
import Image from "next/image";

export default function AdminPanel() {
  const { appTheme } = useContext(ThemeContext);

  const iconStyle = {
    filter: getFilter(appTheme),
  };

  const PanelTile = (props: { link: string; icon: string; text: string }) => {
    const { link, icon, text } = props;
    return (
      <Link
        href={`/admin-panel/${link}`}
        className={`w-full flex flex-col items-center`}
      >
        <div
          className={`w-2/3 hover:bg-${appTheme}-containerBg rounded-md flex flex-col items-center p-8 gap-4`}
        >
          <Image
            src={icon}
            style={iconStyle}
            width={100}
            height={100}
            alt="dash"
          />
          <div className="font-lights text-sm lg:text-xl">{text}</div>
        </div>
      </Link>
    );
  };

  return (
    <PageWrapper>
      <div className="grid grid-cols-3 py-4 w-full">
        <PanelTile link={"dashboard"} text={"Dashboard"} icon={dashboard} />
        <PanelTile
          link={"create-product"}
          text={"New Product"}
          icon={newProduct}
        />
        <PanelTile
          link={"edit-product"}
          text={"Edit Product"}
          icon={editProduct}
        />
      </div>
    </PageWrapper>
  );
}
