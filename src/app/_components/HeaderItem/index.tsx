import Link from "next/link";
import type { ComponentType } from "react";

const HeaderItem = ({
  activeLink,
  href,
  title,
  Icon,
  ariaLabel,
}: {
  activeLink: string;
  href: string;
  title: string;
  ariaLabel: string;
  Icon: ComponentType;
}) => {
  return (
    <Link
      className={`flex items-center gap-2 mx-4 px-2 pb-2 hover:text-primary ${
        activeLink === `${href}`
          ? "border-b border-secondary text-primary"
          : "mb-px"
      }`}
      href={href}
      aria-label={ariaLabel}
    >
      <Icon />
      <p className="hidden md:block">{title}</p>
    </Link>
  )
}

export default HeaderItem;