import type { Meta, StoryObj } from "@storybook/nextjs";
import PageWrapper from "./index";

const meta: Meta<typeof PageWrapper> = {
  title: "Components/PageWrapper",
  component: PageWrapper,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PageWrapper>;

export const Default: Story = {
  args: {
    children: <p className="text-secondary">Wrapped page content</p>,
  },
};
