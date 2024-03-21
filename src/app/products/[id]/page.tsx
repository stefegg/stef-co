import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay } from "@/app/components";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
}
