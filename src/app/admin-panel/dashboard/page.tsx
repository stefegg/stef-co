import { ScBarChart, PageWrapper } from "@/app/_components";

export default function Page() {
  return (
    <PageWrapper>
      <div className="h-96 w-full rounded-full">
        <ScBarChart />
      </div>
    </PageWrapper>
  );
}
