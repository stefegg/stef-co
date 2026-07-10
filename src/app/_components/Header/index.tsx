"use client";
import { usePathname } from "next/navigation";
import HeaderItem from "../HeaderItem";
import {
  HomeIcon,
  AboutIcon,
  ExperienceIcon,
  ProjectsIcon,
  ContactIcon,
} from "../HeaderItem/icons";

const headerItems = [
  { href: "/", title: "Home", ariaLabel: "Home", Icon: HomeIcon },
  { href: "/about", title: "About", ariaLabel: "About", Icon: AboutIcon },
  {
    href: "/experience",
    title: "Experience + Skills",
    ariaLabel: "Experience",
    Icon: ExperienceIcon,
  },
  {
    href: "/projects",
    title: "Projects",
    ariaLabel: "Projects",
    Icon: ProjectsIcon,
  },
  { href: "/contact", title: "Contact", ariaLabel: "Contact", Icon: ContactIcon },
];

const Header = () => {
  const pathName = usePathname();
  const activeLink = pathName.toString();
  return (
    <nav className="flex flex-col relative">
      <div className="flex items-center p-6 fixed w-full bg-background justify-between border-b border-primary text-link">
        {headerItems.map((item) => (
          <HeaderItem key={item.href} activeLink={activeLink} {...item} />
        ))}
      </div>
    </nav>
  );
};

export default Header;
