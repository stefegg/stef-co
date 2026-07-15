import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Increment" },
};

export const Disabled: Story = {
  args: { children: "Increment", disabled: true },
};
