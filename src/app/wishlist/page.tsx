"use client";
import { PageWrapper, ListHeader, SearchBar } from "../_components";
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
        <ListHeader title={"All Products"} />

        <div className="ml-auto w-1/3">
          <SearchBar placeholder={"Search Wishlist"} />
        </div>
      </div>
      {wishlist.length > 0 ? (
        <div>Wishlist</div>
      ) : (
        <div>Your wishlist is empty</div>
      )}
    </PageWrapper>
  );
}
