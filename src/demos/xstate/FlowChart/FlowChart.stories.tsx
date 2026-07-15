import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "@/components/Card";
import FlowChart from "./index";

const meta: Meta<typeof FlowChart> = {
  title: "Demos/XState/FlowChart",
  component: FlowChart,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FlowChart>;

export const Default: Story = {
  args: {
    steps: [
      { id: "idle", node: <Card label="idle" active /> },
      { id: "input", node: <Card label="input" /> },
      { id: "reviewing", node: <Card label="reviewing" /> },
    ],
    branches: [
      { id: "outcome-a", node: <Card label="outcome A" /> },
      { id: "outcome-b", node: <Card label="outcome B" /> },
    ],
  },
};
