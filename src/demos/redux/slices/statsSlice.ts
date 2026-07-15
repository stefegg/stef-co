import { createSlice } from "@/lib/redux";
import { cellPainted } from "../actions";

type StatsState = {
  paintsByColor: Record<string, number>;
};

const initialState: StatsState = {
  paintsByColor: {},
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cellPainted, (state, action) => {
      const { color } = action.payload;
      state.paintsByColor[color] = (state.paintsByColor[color] ?? 0) + 1;
    });
  },
});

export default statsSlice.reducer;
