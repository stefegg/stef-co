import {
  CategoryList,
  PageWrapper,
  ListHeader,
  LoadingSpinner,
} from "../_components";
import { getCategories } from "../_utils/serverutils";
import { Suspense } from "react";

export default async function Categories() {
  const categories = await getCategories();
  return (
    <PageWrapper>
      <div className={`flex flex-col`}>
        <div className="mb-2">
          <ListHeader title={"Product Categories"} />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryList categories={categories} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
