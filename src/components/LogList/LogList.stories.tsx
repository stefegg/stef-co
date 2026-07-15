import type { Meta, StoryObj } from "@storybook/nextjs";
import LogList from "./index";

const meta: Meta<typeof LogList> = {
  title: "Components/LogList",
  component: LogList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LogList>;

const now = Date.now();

export const Default: Story = {
  args: {
    entries: [
      { id: "1", label: "GET /users/stefegg/repos", timestamp: now - 4000 },
      { id: "2", label: "GET /users/stefegg/repos", timestamp: now - 2000 },
      { id: "3", label: "GET /users/stefegg/repos", timestamp: now },
    ],
  },
};
