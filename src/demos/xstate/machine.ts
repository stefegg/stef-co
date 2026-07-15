import { assign, setup } from "@/lib/xstate";

type FlowContext = {
  choice: string | null;
};

type FlowEvent =
  | { type: "START" }
  | { type: "CHOOSE"; choice: string }
  | { type: "NEXT" }
  | { type: "SUBMIT" }
  | { type: "RESET" };

export const flowMachine = setup({
  types: {
    context: {} as FlowContext,
    events: {} as FlowEvent,
  },
  guards: {
    hasChoice: ({ context }) => context.choice !== null,
    choseA: ({ context }) => context.choice === "a",
  },
}).createMachine({
  id: "flow",
  initial: "idle",
  context: { choice: null },
  states: {
    idle: {
      on: { START: { target: "input" } },
    },
    input: {
      on: {
        CHOOSE: {
          actions: assign({ choice: ({ event }) => event.choice }),
        },
        NEXT: { target: "reviewing", guard: "hasChoice" },
      },
    },
    reviewing: {
      on: {
        SUBMIT: [
          { target: "outcomeA", guard: "choseA" },
          { target: "outcomeB" },
        ],
      },
    },
    outcomeA: {
      on: { RESET: { target: "idle", actions: assign({ choice: null }) } },
    },
    outcomeB: {
      on: { RESET: { target: "idle", actions: assign({ choice: null }) } },
    },
  },
});
