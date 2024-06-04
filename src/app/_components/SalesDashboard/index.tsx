"use client";
import { ScBarChart, ScRadarChart, ScPieChart } from "@/app/_components";
import { useContext } from "react";
import { ThemeContext } from "../../_providers";
import arrowUp from "../../../../public/icons/arrowUp.svg";
import { calendarFilter, arrowFilter } from "../../_utils";
import calendar from "../../../../public/icons/calendar.svg";
import YearSales from "./yearSales";

export default function SalesDashboard() {
  const { appTheme } = useContext(ThemeContext);

  const iconCStyle = {
    filter: calendarFilter(appTheme),
  };

  const iconStyle = {
    filter: arrowFilter(appTheme),
  };

  const monthlyData = [
    "Jan: 4.6k Orders $2.5 mil",
    "Feb: 3.3k Orders $2.5 mil",
    "Mar: 9.8k Orders $2.5 mil",
    "Apr: 4600 Orders $2.5 mil",
    "May: 4600 Orders $2.5 mil",
  ];

  return (
    <div
      className={`lg:flex-row flex flex-col w-full  gap-2 rounded-lg overflow-hidden `}
    >
      <div className="flex flex-col lg:w-1/4 w-full gap-2">
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

      <div className="lg:w-1/2 w-full flex flex-col gap-2 ">
        <div
          className={`h-12 bg-${appTheme}-containerBg text-${appTheme}-secondary pl-4 items-center flex text-xl`}
        >
          Orders
        </div>

        <div
          className={`h-56 bg-${appTheme}-containerBg p-2 flex overflow-auto gap-2 items-start`}
        >
          <YearSales
            year="2024"
            icon={arrowUp}
            iconStyle={iconStyle}
            growth="25% YoY Growth"
            color="secondary"
            dollarAmount={{ currency: "$", number: "15", amount: "million" }}
          />
          <YearSales
            year="2023"
            icon={calendar}
            iconStyle={iconCStyle}
            growth="23 million FY total"
            color="text"
            dollarAmount={{ currency: "$", number: "12", amount: "million" }}
          />
          <div
            className={`text-${appTheme}-link h-full text-base sm:text-xl border-4 rounded-lg border-${appTheme}-link py-2 flex flex-col w-1/3 justify-evenly`}
          >
            <div className="p-2 pt-0 text-sm lg:text-md">Orders Per Month:</div>
            <div
              className={`border-t-2 border-${appTheme}-link overflow-auto gap-2`}
            >
              {monthlyData.map((month, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-sm xl:text-base pt-2 flex justify-center"
                  >
                    {month}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`h-64 bg-${appTheme}-containerBg`}>
          <ScBarChart />
        </div>
      </div>
      <div className="lg:w-1/4 w-full flex flex-col gap-2">
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
