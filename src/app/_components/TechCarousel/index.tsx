"use client";
import Carousel from "react-multi-carousel";
import TechBadge from "../TechBadge";
import { badges } from "../../_utils/constants";

export default function TechCarousel() {
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
    <Carousel responsive={responsive} swipeable infinite>
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
