import type { Meta, StoryObj } from "@storybook/nextjs";
import PixelGrid from "./index";

const meta: Meta<typeof PixelGrid> = {
  title: "Demos/Redux/PixelGrid",
  component: PixelGrid,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PixelGrid>;

export const Default: Story = {
  args: {
    cells: [
      ["primary", null, null],
      [null, "secondary", null],
      [null, null, "link"],
    ],
    onCellClick: () => {},
  },
};
