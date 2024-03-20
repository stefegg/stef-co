import { getProductById } from "@/app/_utils/serverutils";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <div>
      <div>All Products Product</div>
    </div>
  );
}
