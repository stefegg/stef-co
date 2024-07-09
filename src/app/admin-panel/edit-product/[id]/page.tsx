import { PageWrapper } from "@/app/_components";

export default async function EditProductByIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <PageWrapper>
      <div>
        {id}
        <div>hi</div>
      </div>
    </PageWrapper>
  );
}
