"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Toggle from "@/components/Toggle";
import RenderCount from "../RenderCount";
import { useCounterStore } from "../store";

type CounterCardProps = {
  label: string;
  initialSubscribed: boolean;
  canToggle: boolean;
};

const CounterCard = ({
  label,
  initialSubscribed,
  canToggle,
}: CounterCardProps) => {
  const [subscribed, setSubscribed] = useState(initialSubscribed);

  const count = useCounterStore((state) => (subscribed ? state.count : null));

  return (
    <Card label={label} active={subscribed}>
      <p className="text-secondary">value: {count ?? "—"}</p>
      <p className="text-secondary">
        renders: <RenderCount />
      </p>
      {canToggle && (
        <Toggle
          label="Subscribed"
          checked={subscribed}
          onChange={setSubscribed}
        />
      )}
    </Card>
  );
};

export default CounterCard;
