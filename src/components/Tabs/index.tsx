"use client";
import {
  createContext,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs subcomponents must be used within <Tabs>");
  }
  return context;
}

function TabsRoot({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const baseId = useId();
  const value = useMemo(
    () => ({ activeTab, setActiveTab, baseId }),
    [activeTab, baseId],
  );

  return (
    <TabsContext.Provider value={value}>
      <div className="flex flex-col border border-primary rounded-lg">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function TabList({ children, label }: { children: ReactNode; label: string }) {
  const { activeTab, setActiveTab } = useTabsContext();
  const ref = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(
      ref.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
    );
    if (tabs.length === 0) return;

    const currentIndex = tabs.findIndex(
      (tab) => tab.dataset.value === activeTab,
    );
    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    if (nextTab.dataset.value) setActiveTab(nextTab.dataset.value);
    nextTab.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      ref={ref}
      onKeyDown={onKeyDown}
      className="flex flex-wrap gap-x-6 gap-y-2 text-link w-full justify-between p-4"
    >
      {children}
    </div>
  );
}

function Tab({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab, setActiveTab, baseId } = useTabsContext();
  const selected = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      data-value={value}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={`-mb-px pb-2 hover:text-primary cursor-pointer ${
        selected ? "border-b border-secondary text-primary" : ""
      }`}
    >
      {children}
    </button>
  );
}

function TabPanel({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab, baseId } = useTabsContext();
  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className="focus:outline-none p-4"
    >
      {children}
    </div>
  );
}

const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab,
  Panel: TabPanel,
});

export default Tabs;
