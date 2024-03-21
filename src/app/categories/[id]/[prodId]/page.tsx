import { getProductById } from "@/app/_utils/serverutils";
import { ProductDisplay } from "@/app/_components";

export default async function Page({ params }: { params: { prodId: string } }) {
  const { prodId } = params;
  const product = await getProductById(prodId);
  return (
    <>
      <ProductDisplay product={product} />
    </>
  );
}
