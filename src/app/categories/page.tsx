import {
  CategoryList,
  PageWrapper,
  ListHeader,
  LoadingSpinner,
} from "../_components";
import { Suspense } from "react";

export default async function Categories() {
  return (
    <PageWrapper>
      <div className={`flex flex-col`}>
        <div className="mb-2">
          <ListHeader title={"Shop by Category"} />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryList />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
