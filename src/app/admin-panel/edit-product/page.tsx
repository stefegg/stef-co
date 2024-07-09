import { PageWrapper, ListHeader } from "@/app/_components";
import { getProducts } from "@/app/_utils/serverutils";
import EditPanel from "./editPanel";

export default async function EditProductPage() {
  const products = await getProducts();
  return (
    <PageWrapper>
      <div className="w-full justify-center flex mb-4">
        <ListHeader title="Select a Product to Edit" />
      </div>
      <div className={`px-8 gap-2 grid sm:grid-cols-3 lg:grid-cols-4`}>
        {products.map((x) => (
          <EditPanel key={x.id} product={x} />
        ))}
      </div>
    </PageWrapper>
  );
}
