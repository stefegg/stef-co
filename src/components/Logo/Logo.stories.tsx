import type { Meta, StoryObj } from "@storybook/nextjs";
import Logo from "./index";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { text: "Stef Egbert" },
};
