import { createSlice } from "@/lib/redux";
import { cellPainted, timeTravelled } from "../actions";

export type HistoryEntry = {
  id: string;
  timestamp: number;
  action: ReturnType<typeof cellPainted>;
};

type HistoryState = {
  entries: HistoryEntry[];
  cursor: number;
};

const initialState: HistoryState = {
  entries: [],
  cursor: -1,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cellPainted, (state, action) => {
        state.entries = state.entries.slice(0, state.cursor + 1);
        state.entries.push({
          id: action.meta.id,
          timestamp: action.meta.timestamp,
          action,
        });
        state.cursor = state.entries.length - 1;
      })
      .addCase(timeTravelled, (state, action) => {
        state.cursor = action.payload;
      });
  },
});

export default historySlice.reducer;
