import type { Meta, StoryObj } from "@storybook/nextjs";
import Chip from "./index";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Fresh: Story = {
  args: { label: "fresh · 7s left", variant: "fresh" },
};

export const Stale: Story = {
  args: { label: "stale", variant: "stale" },
};

export const Fetching: Story = {
  args: { label: "fetching", variant: "fetching" },
};
