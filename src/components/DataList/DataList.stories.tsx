import type { Meta, StoryObj } from "@storybook/nextjs";
import DataList from "./index";

const meta: Meta<typeof DataList> = {
  title: "Components/DataList",
  component: DataList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataList>;

export const Default: Story = {
  args: {
    items: [
      { id: "pokedex", label: "pokedex", value: "12 ★" },
      { id: "stef-co", label: "stef-co", value: "3 ★" },
      { id: "stefco-store", label: "stefco-store", value: "1 ★" },
    ],
  },
};

export const Empty: Story = {
  args: { items: [] },
};
