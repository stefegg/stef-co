"use client";
import Carousel from "react-multi-carousel";
import { FetchedProduct } from "../_types";
import ProductTile from "./productTile";
type CarouselProps = {
  products: FetchedProduct[];
};

export default function ReactCarousel(props: CarouselProps) {
  const { products } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
    <Carousel responsive={responsive}>
      {products.map((prod, index) => {
        return (
          <div key={index} className="max-w-96 px-2">
            <ProductTile key={index} product={prod} />
          </div>
        );
      })}
    </Carousel>
  );
}
