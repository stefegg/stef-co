"use client";
import { useMachine } from "@/lib/xstate";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Radio from "@/components/Radio";
import FlowChart from "./FlowChart";
import { flowMachine } from "./machine";

const OPTIONS = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
];

const XStateDemo = () => {
  const [state, send] = useMachine(flowMachine);

  return (
    <FlowChart
      steps={[
        {
          id: "idle",
          node: (
            <Card label="idle" active={state.matches("idle")}>
              <Button
                disabled={!state.can({ type: "START" })}
                onClick={() => send({ type: "START" })}
              >
                Start
              </Button>
            </Card>
          ),
        },
        {
          id: "input",
          node: (
            <Card label="input" active={state.matches("input")}>
              <Radio
                legend="Pick one"
                name="xstate-choice"
                options={OPTIONS}
                selected={state.context.choice}
                onSelect={(choice) => send({ type: "CHOOSE", choice })}
              />
              <Button
                disabled={!state.can({ type: "NEXT" })}
                onClick={() => send({ type: "NEXT" })}
              >
                Next
              </Button>
            </Card>
          ),
        },
        {
          id: "reviewing",
          node: (
            <Card label="reviewing" active={state.matches("reviewing")}>
              <p>You chose: {state.context.choice ?? "—"}</p>
              <Button
                disabled={!state.can({ type: "SUBMIT" })}
                onClick={() => send({ type: "SUBMIT" })}
              >
                Submit
              </Button>
            </Card>
          ),
        },
      ]}
      branches={[
        {
          id: "outcomeA",
          node: (
            <Card label="outcome A" active={state.matches("outcomeA")}>
              <Button
                disabled={!state.matches("outcomeA")}
                onClick={() => send({ type: "RESET" })}
              >
                Reset
              </Button>
            </Card>
          ),
        },
        {
          id: "outcomeB",
          node: (
            <Card label="outcome B" active={state.matches("outcomeB")}>
              <Button
                disabled={!state.matches("outcomeB")}
                onClick={() => send({ type: "RESET" })}
              >
                Reset
              </Button>
            </Card>
          ),
        },
      ]}
    />
  );
};

export default XStateDemo;
