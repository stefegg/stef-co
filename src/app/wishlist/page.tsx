"use client";
import {
  PageWrapper,
  ListHeader,
  SearchBar,
  ProductTile,
} from "../_components";
import { CartContext } from "../_providers";
import { useContext } from "react";

export default function Wishlist({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const { wishlist } = useContext(CartContext);
  const filteredList = Array.isArray(wishlist)
    ? wishlist.filter((wish) => {
        return wish.name.toLowerCase().includes(query.toLowerCase());
      })
    : [];
  return (
    <PageWrapper>
      <div className="flex flex-row items-center mb-4">
        <ListHeader title={"Wishlist"} />
        <div className="ml-auto w-1/3">
          <SearchBar placeholder={"Search Wishlist"} />
        </div>
      </div>
      {wishlist.length ? (
        <div
          className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 text-xl gap-8 grid-auto-rows sm:pr-6`}
        >
          {filteredList.map((item, idx) => (
            <div key={idx}>
              <ProductTile product={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-xl mt-8 ml-2 font-light">
          Your wishlist is empty
        </div>
      )}
    </PageWrapper>
  );
}
