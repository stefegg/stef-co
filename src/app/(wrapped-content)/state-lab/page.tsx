import type { Metadata } from "next";
import StateLabTabs from "./StateLabTabs";

export const metadata: Metadata = {
  title: "State Lab",
  description: "A selection displaying different types of state management.",
};

const StateLab = () => {
  return (
    <div className="md:mt-10">
      <h1 className="sr-only">State Lab</h1>
      <StateLabTabs />
    </div>
  );
};

export default StateLab;
