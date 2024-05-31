"use client";
import { ScBarChart, ScRadarChart, ScPieChart } from "@/app/_components";
import { useContext } from "react";
import { ThemeContext } from "../_providers";

export default function SalesDashboard() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className={`flex-row flex w-full  gap-2 rounded-lg overflow-hidden `}>
      <div className="flex flex-col w-1/4 gap-2">
        <div
          className={`h-12 bg-${appTheme}-containerBg text-${appTheme}-secondary pl-4 items-center flex text-xl`}
        >
          Sales
        </div>
        <div className={`h-56 bg-${appTheme}-containerBg pl-4 pt-2`}>
          Category sales data
        </div>
        <div className={`h-64 bg-${appTheme}-containerBg`}>
          <ScPieChart />
        </div>
      </div>

      <div className="w-1/2  flex flex-col gap-2 ">
        <div
          className={`h-12 bg-${appTheme}-containerBg text-${appTheme}-secondary pl-4 items-center flex text-xl`}
        >
          Orders
        </div>

        <div className={`h-56 bg-${appTheme}-containerBg pl-4 pt-2`}>
          Monthly Product Data
        </div>
        <div className={`h-64 bg-${appTheme}-containerBg`}>
          <ScBarChart />
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-2">
        <div
          className={`h-12 bg-${appTheme}-containerBg text-${appTheme}-secondary pl-4 items-center flex text-xl`}
        >
          Markets
        </div>

        <div className={`h-56 bg-${appTheme}-containerBg`}>
          <ScRadarChart />
        </div>
        <div className={`h-64 bg-${appTheme}-containerBg pl-4 pt-2`}>
          Sales per market
        </div>
      </div>
    </div>
  );
}
