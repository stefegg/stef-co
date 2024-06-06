"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { ThemeContext } from "../../_providers";

const data = [
  {
    subject: "USA",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Canada",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "England",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Korea",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Chile",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Mexico",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function ScRadarChart() {
  const { appTheme } = useContext(ThemeContext);

  const getRadarFill = () => {
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
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke={getStrokeFill()} />
        <PolarAngleAxis dataKey="subject" stroke={getStrokeFill()} />
        <PolarRadiusAxis stroke={getStrokeFill()} />
        <Radar
          name="Markets"
          dataKey="A"
          stroke={getRadarFill()}
          fill={getRadarFill()}
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
