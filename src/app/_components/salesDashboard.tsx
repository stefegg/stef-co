"use client";
import { ScBarChart, ScRadarChart, ScPieChart } from "@/app/_components";
import { useContext } from "react";
import { ThemeContext } from "../_providers";
import arrowUp from "../../../public/icons/arrowUp.svg";
import Image from "next/image";
import { calendarFilter, arrowFilter } from "../_utils";
import calendar from "../../../public/icons/calendar.svg";

export default function SalesDashboard() {
  const { appTheme } = useContext(ThemeContext);

  const iconCStyle = {
    filter: calendarFilter(appTheme),
  };

  const iconStyle = {
    filter: arrowFilter(appTheme),
  };

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
          <div
            className={`text-${appTheme}-secondary min-h-full text-sm sm:text-xl border-4 rounded-lg border-${appTheme}-secondary px-2 flex flex-col w-1/3 justify-evenly`}
          >
            2024 YTD Net Sales:
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="text-3xl md:text-5xl xl:text-7xl">$15</div>
                <div className="text-base md:text-md xl:text-4xl">million</div>
              </div>
            </div>
            <div className="text-sm xl:text-lg flex flex-row gap">
              <div>25% YoY Growth</div>
              <Image
                src={arrowUp}
                alt="arrow"
                height={20}
                width={20}
                style={iconStyle}
              />
            </div>
          </div>
          <div
            className={`text-${appTheme}-text h-full text-sm sm:text-xl border-4 rounded-lg border-${appTheme}-text px-2 flex flex-col w-1/3 justify-evenly`}
          >
            2023 YTD Net Sales:
            <div className=" flex flex-col">
              <div className="text-3xl md:text-5xl xl:text-7xl">$12</div>
              <div className="text-base md:text-md xl:text-4xl">million</div>
            </div>
            <div className="text-sm xl:text-lg flex flex-row gap-2">
              <div>23 million FY total</div>
              <Image
                src={calendar}
                alt="calendar"
                height={40}
                width={20}
                style={iconCStyle}
              />
            </div>
          </div>
          <div
            className={`text-${appTheme}-link h-full text-base sm:text-xl border-4 rounded-lg border-${appTheme}-link py-2 flex flex-col w-1/3 justify-evenly`}
          >
            <div className="p-2 pt-0 text-sm lg:text-md">Orders Per Month:</div>
            <div
              className={`border-t-2 border-${appTheme}-link overflow-auto gap-2`}
            >
              <div className="text-sm xl:text-base pt-2 flex justify-center">
                Jan: 4.6k Orders $2.5 mil
              </div>
              <div className="text-sm xl:text-base pt-2 flex justify-center">
                Feb: 3.3k Orders $2.5 mil
              </div>
              <div className="text-sm xl:text-base pt-2 flex justify-center">
                Mar: 9.8k Orders $2.5 mil
              </div>
              <div className="text-sm xl:text-base pt-2 flex justify-center">
                Apr: 4600 Orders $2.5 mil
              </div>
              <div className="text-sm xl:text-base pt-2 flex justify-center">
                May: 4600 Orders $2.5 mil
              </div>
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
