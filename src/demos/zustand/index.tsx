"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Toggle from "@/components/Toggle";
import CounterCard from "./CounterCard";
import TransientCard from "./TransientCard";
import { useCounterStore } from "./store";

const ZustandDemo = () => {
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
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
    <div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={reset}>Reset</Button>
      <Toggle label="Run at 60fps" checked={running} onChange={setRunning} />

      <CounterCard
        label="A — never subscribed"
        initialSubscribed={false}
        canToggle={false}
      />
      <CounterCard
        label="B — always subscribed"
        initialSubscribed
        canToggle={false}
      />
      <CounterCard
        label="C — toggle the subscription"
        initialSubscribed
        canToggle
      />

      <TransientCard />
    </div>
  );
};

export default ZustandDemo;
