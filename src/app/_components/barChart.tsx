"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { ThemeContext } from "../_providers";
import { useContext } from "react";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

export default function ScBarChart() {
  const { appTheme } = useContext(ThemeContext);
  const data = [
    {
      name: "Jan",
      2023: 4000,
      2024: 4600,
    },
    {
      name: "Feb",
      2023: 3000,
      2024: 3298,
    },
    {
      name: "Mar",
      2023: 2000,
      2024: 9800,
    },
    {
      name: "Apr",
      2023: 2780,
      2024: 3908,
    },
    {
      name: "May",
      2023: 1890,
      2024: 4800,
    },
  ];

  const getPrimaryFill = () => {
    switch (appTheme) {
      case "classic":
        return "#5fafd7";
      case "dark":
        return "#BB86FC";
      case "light":
        return "#005faf";
    }
  };
  const getSecondaryFill = () => {
    switch (appTheme) {
      case "classic":
        return "#03c51d";
      case "dark":
        return "#03DAc6";
      case "light":
        return "#363636";
    }
  };

  const getTickFill = () => {
    switch (appTheme) {
      case "classic":
        return "#ffdd00";
      case "dark":
        return "#BB86FC";
      case "light":
        return "#005faf";
    }
  };

  const CustomToolTip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={`bg-${appTheme}-bodyBg w-24 rounded-md flex flex-col items-center p-2`}
        >
          <div>{label}</div>
          <div className={`flex flex-row text-${appTheme}-link`}>
            {payload[0].name}: {payload[0].value}
          </div>
          <div className={`flex flex-row text-${appTheme}-secondary`}>
            {payload[1].name}: {payload[1].value}
          </div>
        </div>
      );
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: getTickFill() }}
          tickLine={{ stroke: getTickFill() }}
          axisLine={{ stroke: getSecondaryFill() }}
        />
        <YAxis yAxisId="left" orientation="left" stroke={getSecondaryFill()} />
        <Tooltip cursor={{ fill: "#363636" }} content={<CustomToolTip />} />
        <Legend />
        <Bar yAxisId="left" dataKey="2023" fill={getPrimaryFill()} />
        <Bar yAxisId="left" dataKey="2024" fill={getSecondaryFill()} />
      </BarChart>
    </ResponsiveContainer>
  );
}
