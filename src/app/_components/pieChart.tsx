"use client";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  LabelProps,
} from "recharts";
import { useContext } from "react";
import { ThemeContext } from "../_providers";

const data01 = [
  { name: "Battle Cruisers", value: 400 },
  { name: "Bikes", value: 300 },
  { name: "Dog Chews", value: 300 },
  { name: "Dragonballs", value: 75 },
  { name: "Flowers", value: 278 },
  { name: "Fosssils", value: 189 },
  { name: "Legendary Weapons", value: 189 },
];

export default function ScPieChart() {
  const { appTheme } = useContext(ThemeContext);
  const getPieFill = () => {
    switch (appTheme) {
      case "classic":
        return "#5fafd7";
      case "dark":
        return "#BB86FC";
      case "light":
        return "#005faf";
    }
  };
  const getStrokeFill = () => {
    switch (appTheme) {
      case "classic":
        return "#ffdd00";
      case "dark":
        return "#03DAc6";
      case "light":
        return "#363636";
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          fill={getPieFill()}
          stroke={getStrokeFill()}
          labelLine={false}
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
