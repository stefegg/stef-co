"use client";
import DemoPanel from "@/components/DemoPanel";
import Tabs from "@/components/Tabs";
import QueryDemo from "@/demos/query";
import ReduxDemo from "@/demos/redux";
import XStateDemo from "@/demos/xstate";
import ZustandDemo from "@/demos/zustand";

const StateLabTabs = () => {
  return (
    <Tabs defaultValue="context">
      <Tabs.List label="State management demos">
        <Tabs.Tab value="context">React Context</Tabs.Tab>
        <Tabs.Tab value="query">TanStack Query</Tabs.Tab>
        <Tabs.Tab value="machine">XState</Tabs.Tab>
        <Tabs.Tab value="redux">Redux</Tabs.Tab>
        <Tabs.Tab value="zustand">Zustand</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="context">
        <DemoPanel
          title="React Context"
          blurb="Internal coordination inside one component — not global state."
          description={
            <p>
              The tabs you are clicking are the demo. Tabs is a compound
              component: its Context is created inside it, never exported, and
              exists only to coordinate its own parts. The public API is Tabs,
              Tabs.List, Tabs.Tab and Tabs.Panel — the Context is an
              implementation detail. Try the arrow keys, Home and End; the
              roving focus you feel is coordinated through it.
            </p>
          }
        />
      </Tabs.Panel>

      <Tabs.Panel value="query">
        <DemoPanel
          title="TanStack Query"
          blurb="Server state. The win is the request that never fires."
          description={
            <p>
              Click Refetch several times as fast as you can — the in-flight
              requests collapse into a single line in the log. Untick Panel
              mounted and tick it back on: the repos return instantly and the
              log stays silent, because the cache outlived the unmount. Hit
              Invalidate, then remount: cached data stays on screen with no
              spinner while a background request appears in the log. The log
              records real network calls only, so what it does <em>not</em> show
              is the point.
            </p>
          }
        >
          <QueryDemo />
        </DemoPanel>
      </Tabs.Panel>

      <Tabs.Panel value="machine">
        <DemoPanel
          title="XState"
          blurb="Guards make impossible states impossible."
          description={
            <p>
              Next is disabled until you pick an option. That is not a bug — it
              is a guard: the machine refuses the transition, so the button
              cannot be pressed. Submit is a single event with two guarded
              targets; the guard reads the answer you gave and routes you to one
              outcome or the other, which is why the fork is never a surprise.
              The lit box is the machine&rsquo;s current state.
            </p>
          }
        >
          <XStateDemo />
        </DemoPanel>
      </Tabs.Panel>

      <Tabs.Panel value="redux">
        <DemoPanel
          title="Redux"
          blurb="An action is a fact; every slice replays from the log."
          description={
            <p>
              Pick a color and paint a cell. That one click dispatches one
              action, and three independent slices react to it: the grid paints,
              the stats tally, the log records. None of them know about each
              other. Now click any entry in the log — the app snaps back to that
              moment by replaying the actions from the beginning, so the grid
              and the stats rewind together, in lockstep. Nothing was
              snapshotted; the whole app is rebuilt from the stream of facts.
            </p>
          }
        >
          <ReduxDemo />
        </DemoPanel>
      </Tabs.Panel>

      <Tabs.Panel value="zustand">
        <DemoPanel
          title="Zustand"
          blurb="Only the components that select a value re-render."
          description={
            <p>
              Hit Increment. B re-renders, A never does, and C only while its
              toggle is on — flip it off and its counter freezes while the value
              keeps changing. &ldquo;Unsubscribed&rdquo; means the component is
              not selecting the value, so Zustand&rsquo;s equality check bails
              out before re-rendering; no listener is detached. Selector
              granularity is what governs re-renders. Then turn on Run at 60fps:
              B&rsquo;s render count explodes while the transient card — which
              subscribes outside React and writes straight to the DOM — stays
              pinned at 1.
            </p>
          }
        >
          <ZustandDemo />
        </DemoPanel>
      </Tabs.Panel>
    </Tabs>
  );
};

export default StateLabTabs;
