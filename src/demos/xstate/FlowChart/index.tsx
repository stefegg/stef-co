import type { ReactNode } from "react";

export type FlowNode = {
  id: string;
  node: ReactNode;
};

type FlowChartProps = {
  steps: FlowNode[];
  branches: FlowNode[];
};

const Arrow = () => (
  <span aria-hidden="true" className="self-center text-link">
    <span className="md:hidden">↓</span>
    <span className="hidden md:inline">→</span>
  </span>
);

const FlowChart = ({ steps, branches }: FlowChartProps) => (
  <div className="flex flex-col gap-3 font-light md:flex-row md:items-center">
    <ol className="flex flex-col gap-3 md:flex-row md:items-center">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className="flex flex-col gap-3 md:flex-row md:items-center text-secondary"
        >
          {step.node}
          {index < steps.length - 1 && <Arrow />}
        </li>
      ))}
    </ol>

    <Arrow />

    <ul className="flex flex-col gap-3">
      {branches.map((branch) => (
        <li key={branch.id}>{branch.node}</li>
      ))}
    </ul>
  </div>
);

export default FlowChart;
