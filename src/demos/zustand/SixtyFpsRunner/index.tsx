"use client";
import { useEffect, useState } from "react";
import Toggle from "@/components/Toggle";
import { useCounterStore } from "../store";

const SixtyFpsRunner = () => {
  const increment = useCounterStore((state) => state.increment);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    let frame = requestAnimationFrame(function tick() {
      increment();
      frame = requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(frame);
  }, [running, increment]);

  return (
    <Toggle label="Run at 60fps" checked={running} onChange={setRunning} />
  );
};

export default SixtyFpsRunner;
