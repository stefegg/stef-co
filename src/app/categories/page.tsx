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
  const cleanedCategories = JSON.parse(JSON.stringify(categories));

  return (
    <PageWrapper>
      <div className={`flex flex-col`}>
        <div className="mb-2">
          <ListHeader title={"Shop by Category"} />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryList categories={cleanedCategories} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
