import { createSlice } from "@/lib/redux";
import { cellPainted } from "../actions";

export const GRID_SIZE = 8;

type GridState = {
  cells: (string | null)[][];
};

const initialState: GridState = {
  cells: Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => null as string | null),
  ),
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cellPainted, (state, action) => {
      const { row, column, color } = action.payload;
      state.cells[row][column] = color;
    });
  },
});

export default gridSlice.reducer;
