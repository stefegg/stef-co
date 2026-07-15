"use client";
import { useState } from "react";
import Button from "@/components/Button";
import CounterCard from "./CounterCard";
import SixtyFpsRunner from "./SixtyFpsRunner";
import TransientCard from "./TransientCard";
import { useCounterStore } from "./store";

const ZustandDemo = () => {
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    reset();
    setResetKey((key) => key + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={handleReset}>Reset</Button>
        <SixtyFpsRunner />
      </div>

      <div key={resetKey} className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </div>
  );
};

export default ZustandDemo;
