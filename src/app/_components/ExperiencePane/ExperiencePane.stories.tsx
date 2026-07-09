import type { Meta, StoryObj } from "@storybook/nextjs";
import ExperiencePane from "./index";
import { experiences } from "../../_utils/constants";

const meta: Meta<typeof ExperiencePane> = {
  title: "Components/ExperiencePane",
  component: ExperiencePane,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ExperiencePane>;

export const Default: Story = {
  args: { experience: experiences[0] },
};

export const Custom: Story = {
  args: {
    experience: {
      title: "Senior Frontend Engineer",
      dates: "2024 - Present",
      company: "Example Co.",
      location: "Remote",
      duties: [
        "Built and shipped core product features in React and TypeScript",
        "Led architecture decisions around state management",
        "Mentored engineers and drove code review standards",
      ],
    },
  },
};
