import { createAction, nanoid } from "@/lib/redux";

export type CellPaintedPayload = {
  row: number;
  column: number;
  color: string;
};

export const cellPainted = createAction(
  "cellPainted",
  (input: CellPaintedPayload) => ({
    payload: input,
    meta: { id: nanoid(), timestamp: Date.now() },
  }),
);

export const timeTravelled = createAction<number>("timeTravelled");
