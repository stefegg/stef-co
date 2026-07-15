import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    label: "reviewing",
    children: <p>Card content.</p>,
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Active: Story = {
  args: { active: true },
};

export const Inactive: Story = {
  args: { active: false },
};
