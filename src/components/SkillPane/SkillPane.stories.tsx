import type { Meta, StoryObj } from "@storybook/nextjs";
import SkillPane from "./index";

const meta: Meta<typeof SkillPane> = {
  title: "Components/SkillPane",
  component: SkillPane,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SkillPane>;

export const Default: Story = {};
