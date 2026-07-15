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
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-4 w-4 rounded-full border border-divider"
            style={{ backgroundColor: toCssColor(color) }}
          />
          {color}
        </span>
      ),
    }))}
  />
);

export default ColorPalette;
