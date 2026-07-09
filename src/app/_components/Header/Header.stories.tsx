import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const HomeActive: Story = {};

export const AboutActive: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: { pathname: "/about" },
    },
  },
};
