"use client";
import { useEffect, useRef } from "react";

const RenderCount = () => {
  const count = useRef(0);
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    count.current += 1;
    if (display.current) {
      display.current.textContent = String(count.current);
    }
  });

  return <span ref={display} />;
};

export default RenderCount;
