import { toCssColor } from "../palette";

type PixelGridProps = {
  cells: (string | null)[][];
  onCellClick: (row: number, column: number) => void;
};

const PixelGrid = ({ cells, onCellClick }: PixelGridProps) => (
  <div className="inline-flex flex-col gap-1">
    {cells.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-1">
        {row.map((color, columnIndex) => (
          <button
            key={columnIndex}
            type="button"
            onClick={() => onCellClick(rowIndex, columnIndex)}
            aria-label={`Paint row ${rowIndex + 1}, column ${columnIndex + 1}`}
            className="h-6 w-6 rounded border border-divider cursor-pointer"
            style={{
              backgroundColor: color ? toCssColor(color) : undefined,
            }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default PixelGrid;
