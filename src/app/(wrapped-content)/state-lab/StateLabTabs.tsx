"use client";
import Tabs from "@/app/_components/Tabs";

const StateLabTabs = () => {
  return (
    <Tabs defaultValue="query">
      <Tabs.List label="State management demos">
        <Tabs.Tab value="query">TanStack Query</Tabs.Tab>
        <Tabs.Tab value="machine">XState</Tabs.Tab>
        <Tabs.Tab value="redux">Redux</Tabs.Tab>
        <Tabs.Tab value="zustand">Zustand</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="query">TanStack Query demo goes here.</Tabs.Panel>
      <Tabs.Panel value="machine">XState demo goes here.</Tabs.Panel>
      <Tabs.Panel value="redux">Redux demo goes here.</Tabs.Panel>
      <Tabs.Panel value="zustand">Zustand demo goes here.</Tabs.Panel>
    </Tabs>
  );
};

export default StateLabTabs;
