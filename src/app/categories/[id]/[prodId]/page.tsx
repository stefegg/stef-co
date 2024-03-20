import { getProductById } from "@/app/_utils/serverutils";

export default async function Page({ params }: { params: { prodId: string } }) {
  const { prodId } = params;
  const product = await getProductById(prodId);
  return (
    <div>
      <div>Categories Product</div>
    </div>
  );
}
