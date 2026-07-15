import { combineReducers, configureStore, type Reducer } from "@/lib/redux";
import { timeTravelled } from "./actions";
import gridReducer from "./slices/gridSlice";
import statsReducer from "./slices/statsSlice";
import historyReducer from "./slices/historySlice";

const combined = combineReducers({
  grid: gridReducer,
  stats: statsReducer,
  history: historyReducer,
});

export type RootState = ReturnType<typeof combined>;

const rootReducer: Reducer<RootState> = (state, action) => {
  if (timeTravelled.match(action) && state) {
    const replayed = state.history.entries.slice(0, action.payload + 1).reduce(
      (acc, entry) => ({
        grid: gridReducer(acc.grid, entry.action),
        stats: statsReducer(acc.stats, entry.action),
      }),
      {
        grid: gridReducer(undefined, action),
        stats: statsReducer(undefined, action),
      },
    );

    return {
      grid: replayed.grid,
      stats: replayed.stats,
      history: historyReducer(state.history, action),
    };
  }

  return combined(state, action);
};

export const makeStore = () => configureStore({ reducer: rootReducer });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
