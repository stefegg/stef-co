import type { Meta, StoryObj } from "@storybook/nextjs";
import Radio from "./index";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    legend: "Pick one",
    name: "example",
    options: [
      { value: "a", label: "Option A" },
      { value: "b", label: "Option B" },
    ],
    onSelect: () => {},
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { selected: null },
};

export const Selected: Story = {
  args: { selected: "a" },
};
