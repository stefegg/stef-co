import React from "react";
import {
  Logo,
  PageWrapper,
  Carousel,
  ListHeader,
  ReactCarousel,
} from "./_components/index";
import { getFeaturedProducts } from "./_utils/serverutils";

export default async function Home() {
  const products = await getFeaturedProducts();
  return (
    <main className={`flex flex-col w-full items-center`}>
      <PageWrapper>
        <div className="flex flex-col w-full justify-center">
          <div className="w-full flex flex-col items-center pr-10 mb-6">
            <div className="w-1/4 mt-4 mb-4">
              <Logo size="large" />
            </div>
            <ListHeader title="Featured Products" />
          </div>
          <ReactCarousel products={products} />
        </div>
      </PageWrapper>
    </main>
  );
}
