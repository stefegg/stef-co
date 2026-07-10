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
        <div
          className={`pb-2 ${
            activeLink === `${href}` ? `border-b border-secondary` : `mb-px`
          }`}
        >
          <Link
            className={`flex items-center mx-4 hover:text-primary ${
              activeLink === `${href}` ? "text-primary" : ""
            }`}
            href={href}
            aria-label={ariaLabel}
          >
            <Icon />
            <p className="hidden md:block">{title}</p>
          </Link>
        </div>
  )
}

export default HeaderItem;