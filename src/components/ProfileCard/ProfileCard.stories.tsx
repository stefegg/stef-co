import type { Meta, StoryObj } from "@storybook/nextjs";
import ProfileCard from "./index";

const meta: Meta<typeof ProfileCard> = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
