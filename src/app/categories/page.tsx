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
        <ListHeader title={"Product Categories"} />
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryList categories={categories} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
