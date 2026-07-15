import Radio from "@/components/Radio";
import { toCssColor } from "../palette";

type ColorPaletteProps = {
  colors: readonly string[];
  selected: string;
  onSelect: (color: string) => void;
};

const ColorPalette = ({ colors, selected, onSelect }: ColorPaletteProps) => (
  <Radio
    legend="Color"
    name="pixel-color"
    selected={selected}
    onSelect={onSelect}
    options={colors.map((color) => ({
      value: color,
      label: (
        <>
          <span
            aria-hidden="true"
            style={{ backgroundColor: toCssColor(color) }}
          />
          {color}
        </>
      ),
    }))}
  />
);

export default ColorPalette;
