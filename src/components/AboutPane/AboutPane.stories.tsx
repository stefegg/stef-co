import type { Meta, StoryObj } from "@storybook/nextjs";
import AboutPane from "./index";

const meta: Meta<typeof AboutPane> = {
  title: "Components/AboutPane",
  component: AboutPane,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AboutPane>;

export const Default: Story = {};
