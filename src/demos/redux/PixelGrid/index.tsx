import { toCssColor } from "../palette";

type PixelGridProps = {
  cells: (string | null)[][];
  onCellClick: (row: number, column: number) => void;
};

const PixelGrid = ({ cells, onCellClick }: PixelGridProps) => (
  <div>
    {cells.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((color, columnIndex) => (
          <button
            key={columnIndex}
            type="button"
            onClick={() => onCellClick(rowIndex, columnIndex)}
            aria-label={`Paint row ${rowIndex + 1}, column ${columnIndex + 1}`}
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
