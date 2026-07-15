"use client";
import { useEffect, useRef } from "react";
import Card from "@/components/Card";
import RenderCount from "../RenderCount";
import { useCounterStore } from "../store";

const TransientCard = () => {
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const write = (count: number) => {
      if (valueRef.current) {
        valueRef.current.textContent = String(count);
      }
    };

    write(useCounterStore.getState().count);

    return useCounterStore.subscribe((state) => write(state.count));
  }, []);

  return (
    <Card label="Transient — subscribed outside React" active>
      <p>
        value: <span ref={valueRef} />
      </p>
      <p>
        renders: <RenderCount />
      </p>
    </Card>
  );
};

export default TransientCard;
