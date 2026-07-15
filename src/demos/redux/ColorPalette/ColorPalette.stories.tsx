import type { Meta, StoryObj } from "@storybook/nextjs";
import { PALETTE } from "../palette";
import ColorPalette from "./index";

const meta: Meta<typeof ColorPalette> = {
  title: "Demos/Redux/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  args: {
    colors: PALETTE,
    selected: PALETTE[0],
    onSelect: () => {},
  },
};
