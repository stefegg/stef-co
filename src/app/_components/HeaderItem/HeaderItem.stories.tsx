import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderItem from "./index";
import { AboutIcon } from "./icons";

const meta: Meta<typeof HeaderItem> = {
  title: "Components/HeaderItem",
  component: HeaderItem,
  tags: ["autodocs"],
  decorators: [
    // Mirror the header's context: background ground + link-colored text.
    (Story) => (
      <div className="flex bg-background p-6 text-link">
        <Story />
      </div>
    ),
  ],
  args: {
    href: "/about",
    title: "About",
    ariaLabel: "About",
    Icon: AboutIcon,
    activeLink: "/",
  },
};
export default meta;

type Story = StoryObj<typeof HeaderItem>;

export const Default: Story = {};

export const Active: Story = {
  args: { activeLink: "/about" },
};
