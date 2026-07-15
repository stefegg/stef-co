import type { Meta, StoryObj } from "@storybook/nextjs";
import Tabs from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="one">
      <Tabs.List label="Example tabs">
        <Tabs.Tab value="one">One</Tabs.Tab>
        <Tabs.Tab value="two">Two</Tabs.Tab>
        <Tabs.Tab value="three">Three</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="one">First panel</Tabs.Panel>
      <Tabs.Panel value="two">Second panel</Tabs.Panel>
      <Tabs.Panel value="three">Third panel</Tabs.Panel>
    </Tabs>
  ),
};
