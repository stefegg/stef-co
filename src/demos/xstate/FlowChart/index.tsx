import type { ReactNode } from "react";

export type FlowNode = {
  id: string;
  node: ReactNode;
};

type FlowChartProps = {
  steps: FlowNode[];
  branches: FlowNode[];
};

const FlowChart = ({ steps, branches }: FlowChartProps) => (
  <div>
    <ol>
      {steps.map((step, index) => (
        <li key={step.id}>
          {step.node}
          {index < steps.length - 1 && <span aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>

    <span aria-hidden="true">→</span>

    <ul>
      {branches.map((branch) => (
        <li key={branch.id}>{branch.node}</li>
      ))}
    </ul>
  </div>
);

export default FlowChart;
