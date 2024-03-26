"use client";
import {
  PageWrapper,
  ListHeader,
  SearchBar,
  ProductContainer,
  LoadingSpinner,
} from "../_components";
import { CartContext } from "../_providers";
import { useContext } from "react";
import { Suspense } from "react";

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
      {wishlist.length > 0 ? (
        <Suspense fallback={<LoadingSpinner />}>
          <ProductContainer
            products={filteredList.sort(
              (a, b) => Number(a.categoryId) - Number(b.categoryId)
            )}
          />
        </Suspense>
      ) : (
        <div className="text-xl mt-8 ml-2">Your wishlist is empty</div>
      )}
    </PageWrapper>
  );
}
