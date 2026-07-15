import type { Meta, StoryObj } from "@storybook/nextjs";
import ThemeSwitcher from "./index";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ transform: "translate(0, 0)", height: "10rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
