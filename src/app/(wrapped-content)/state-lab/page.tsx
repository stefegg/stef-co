import type { Metadata } from "next";
import StateLabTabs from "./StateLabTabs";

export const metadata: Metadata = {
  title: "State Lab",
  description: "A selection displaying different types of state management.",
};

const StateLab = () => {
  return <StateLabTabs />;
};

export default StateLab;
