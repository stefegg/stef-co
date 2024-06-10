"use client";
import Carousel from "react-multi-carousel";
import TechBadge from "../TechBadge";
import {
  docker,
  git,
  javascript,
  mongodb,
  nextjs,
  postgresql,
  react,
  redux,
  sass,
  storybook,
  typescript,
  nodeJs,
  jest,
  html5,
  css3,
  materialUi,
  bootstrap,
  daisyUi,
  prismaIcon,
  graphQL,
  recoilIcon,
  tailwind,
  vercelIcon,
  styledIcon,
  rubyIcon,
  railsIcon,
} from "../../../../public/icons";

export default function TechCarousel() {
  const badges = [
    { title: "React", src: react },
    { title: "Javascript", src: javascript },
    { title: "Typescript", src: typescript },
    { title: "Next.Js", src: nextjs },
    { title: "Redux", src: redux },
    { title: "React Native", src: react },
    { title: "Tailwind CSS", src: tailwind },
    { title: "Sass", src: sass },
    { title: "Styled Components", src: styledIcon },
    { title: "HTML", src: html5 },
    { title: "CSS", src: css3 },
    { title: "Node.js", src: nodeJs },
    { title: "MongoDb", src: mongodb },
    { title: "PostgreSQL", src: postgresql },
    { title: "GraphQL", src: graphQL },
    { title: "Prisma ORM", src: prismaIcon },
    { title: "Vercel", src: vercelIcon },
    { title: "Docker", src: docker },
    { title: "Jest", src: jest },
    { title: "Ruby", src: rubyIcon },
    { title: "Rails", src: railsIcon },
    { title: "Recoil", src: recoilIcon },
    { title: "Storybook", src: storybook },
    { title: "Material UI", src: materialUi },
    { title: "Bootstrap", src: bootstrap },
    { title: "daisy UI", src: daisyUi },
    { title: "Git", src: git },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    smdesktop: {
      breakpoint: { max: 1200, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable
      autoPlay
      autoPlaySpeed={2000}
      infinite
    >
      {badges.map((b, index) => {
        return (
          <div key={index} className="max-w-1/3 h-full px-2 font-thin flex">
            <TechBadge
              key={index}
              title={b.title}
              src={b.src}
              textSize="2xl"
              bgColor="containerBg"
            />
          </div>
        );
      })}
    </Carousel>
  );
}
