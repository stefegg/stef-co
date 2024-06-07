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
} from "../../../../public/icons";

export default function ReactCarousel() {
  const badges = [
    { title: "React", src: react },
    { title: "Javascript", src: javascript },
    { title: "Typescript", src: typescript },
    { title: "Next.Js", src: nextjs },
    { title: "Redux", src: redux },
    { title: "React Native", src: react },
    { title: "Sass", src: sass },
    { title: "HTML", src: html5 },
    { title: "CSS", src: css3 },
    { title: "Node.js", src: nodeJs },
    { title: "MongoDb", src: mongodb },
    { title: "PostgreSQL", src: postgresql },
    { title: "GraphQL", src: graphQL },
    { title: "Prisma ORM", src: prismaIcon },
    { title: "Docker", src: docker },
    { title: "Jest", src: jest },
    { title: "Storybook", src: storybook },
    { title: "Material UI", src: materialUi },
    { title: "Bootstrap", src: bootstrap },
    { title: "daisy UI", src: daisyUi },
    { title: "Git", src: git },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    smdesktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
          <div key={index} className="max-w-1/3 h-full px-2">
            <TechBadge key={index} title={b.title} src={b.src} />
          </div>
        );
      })}
    </Carousel>
  );
}
