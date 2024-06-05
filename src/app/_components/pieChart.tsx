"use client";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
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
  const getStrokeFill = () => {
    switch (appTheme) {
      case "classic":
        return "#ffdd00";
      case "dark":
        return "#3700b3";
      case "light":
        return "#363636";
    }
  };

  const getColors = () => {
    switch (appTheme) {
      case "classic":
        return [
          "#5fafd7",
          "#005faf",
          "#03DAc6",
          "#03c51d",
          "#ffdd00",
          "#FF8042",
          "#cd0909",
        ];
      case "light":
        return [
          "#878787",
          "#BB86FC",
          "#0070E0",
          "#5fafd7",
          "#03c51d",
          "#cf6679",
          "#cd0909",
        ];
      case "dark":
        return [
          "#BB86FC",
          "#456af1",
          "#0070E0",
          "#5fafd7",
          "#03DAc6",
          "#1ef596",
          "#A5f5fb",
        ];
      default:
        return [
          "#5fafd7",
          "#005faf",
          "#03DAc6",
          "#03c51d",
          "#ffdd00",
          "#FF8042",
          "#cf6679",
        ];
    }
  };

  const colors = getColors();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          data={data01}
          cx="50%"
          cy="50%"
          stroke={getStrokeFill()}
          labelLine={false}
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
