import type { Meta, StoryObj } from "@storybook/nextjs";
import ContactItem from "./index";
import { gmailIcon, githubIcon, linkedInIcon } from "../../../../public/icons";

const meta: Meta<typeof ContactItem> = {
  title: "Components/ContactItem",
  component: ContactItem,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ContactItem>;

export const Email: Story = {
  args: { icon: gmailIcon, innerText: "Email me" },
};

export const Github: Story = {
  args: { icon: githubIcon, innerText: "Check out my Github" },
};

export const LinkedIn: Story = {
  args: { icon: linkedInIcon, innerText: "Add me on LinkedIn" },
};
