"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "@/lib/redux";
import DataList from "@/components/DataList";
import LogList from "@/components/LogList";
import ColorPalette from "../ColorPalette";
import PixelGrid from "../PixelGrid";
import { cellPainted, timeTravelled } from "../actions";
import { PALETTE } from "../palette";
import type { AppDispatch, RootState } from "../store";

const ReduxDemoView = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cells = useSelector((state: RootState) => state.grid.cells);
  const paintsByColor = useSelector(
    (state: RootState) => state.stats.paintsByColor,
  );
  const entries = useSelector((state: RootState) => state.history.entries);
  const cursor = useSelector((state: RootState) => state.history.cursor);

  const [color, setColor] = useState<string>(PALETTE[0]);

  return (
    <div>
      <ColorPalette colors={PALETTE} selected={color} onSelect={setColor} />

      <PixelGrid
        cells={cells}
        onCellClick={(row, column) =>
          dispatch(cellPainted({ row, column, color }))
        }
      />

      <DataList
        items={Object.entries(paintsByColor).map(([paintColor, count]) => ({
          id: paintColor,
          label: paintColor,
          value: count,
        }))}
        emptyMessage="Nothing painted yet."
      />

      <LogList
        entries={entries.map((entry) => ({
          id: entry.id,
          label: `cellPainted(${entry.action.payload.row}, ${entry.action.payload.column}, ${entry.action.payload.color})`,
          timestamp: entry.timestamp,
        }))}
        activeId={entries[cursor]?.id}
        onSelect={(id) => {
          const index = entries.findIndex((entry) => entry.id === id);
          if (index >= 0) dispatch(timeTravelled(index));
        }}
        emptyMessage="No actions yet."
      />
    </div>
  );
};

export default ReduxDemoView;
