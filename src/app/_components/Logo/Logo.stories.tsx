import type { Meta, StoryObj } from "@storybook/nextjs";
import Logo from "./index";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["large", "small"] },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Large: Story = {
  args: { size: "large", text: "Stef Egbert" },
};

export const Small: Story = {
  args: { size: "small", text: "SE" },
};
