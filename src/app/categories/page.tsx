import prisma from "../../../lib/prisma";
import CategoryList from "../components/categoryList";

async function getCategories() {
  "use server";
  const res = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return res;
}

export default async function Categories() {
  const categories = await getCategories();
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}
