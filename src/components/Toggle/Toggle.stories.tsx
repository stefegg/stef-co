import type { Meta, StoryObj } from "@storybook/nextjs";
import Toggle from "./index";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    label: "Subscribed",
    onChange: () => {},
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Unchecked: Story = {
  args: { checked: false },
};

export const Checked: Story = {
  args: { checked: true },
};
