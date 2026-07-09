import type { Meta, StoryObj } from "@storybook/nextjs";
import ProjectPane from "./index";
import { projects } from "../../_utils/constants";

const meta: Meta<typeof ProjectPane> = {
  title: "Components/ProjectPane",
  component: ProjectPane,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ProjectPane>;

export const LiveLink: Story = {
  args: { project: projects[0] },
};

export const GithubRepo: Story = {
  args: {
    project: {
      title: "StefCo. Store",
      link: "https://github.com/stefegg/stef-co-store",
      description:
        "A full stack ecommerce site built as a personal project, featuring a Next.js frontend and PostgreSQL backend.",
      techStack: ["React", "Typescript", "Tailwind CSS", "Next.js", "Prisma"],
    },
  },
};
