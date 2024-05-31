import {
  ScBarChart,
  ScRadarChart,
  ScPieChart,
  PageWrapper,
} from "@/app/_components";

export default function Page() {
  return (
    <PageWrapper>
      <div className="flex-row flex w-full h-128 gap-2 rounded-lg overflow-hidden">
        <div className="flex flex-col w-1/4 gap-2">
          <div className="h-12 bg-white">Header</div>
          <div className="h-56 bg-blue-500">Numbers sales data</div>
          <div className="h-56 bg-red-500">
            <ScPieChart />
          </div>
        </div>

        <div className="w-1/2  flex flex-col gap-2">
          <div className="h-12 bg-black">Header</div>

          <div className="h-56 bg-yellow-500">Sales Data</div>
          <div className="h-56 bg-pink-500">
            <ScBarChart />
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-2">
          <div className="h-12 bg-purple-500">Header</div>

          <div className="h-56 bg-green-500">
            <ScRadarChart />
          </div>
          <div className="h-56 bg-orange-500">Sales List</div>
        </div>
      </div>
    </PageWrapper>
  );
}
