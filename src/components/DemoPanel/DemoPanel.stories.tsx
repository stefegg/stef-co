import type { Meta, StoryObj } from "@storybook/nextjs";
import DemoPanel from "./index";

const meta: Meta<typeof DemoPanel> = {
  title: "Components/DemoPanel",
  component: DemoPanel,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DemoPanel>;

export const Default: Story = {
  args: {
    title: "Zustand",
    blurb: "Only the components that select a value re-render.",
    description: (
      <p>
        Hit Increment and watch which render counters move. Flip C&rsquo;s
        toggle off and its counter freezes while the value keeps changing.
      </p>
    ),
    children: <p>Demo body goes here.</p>,
  },
};
