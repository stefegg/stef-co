"use client";
import { useState } from "react";
import { Provider } from "@/lib/redux";
import { makeStore } from "./store";
import ReduxDemoView from "./ReduxDemoView";

const ReduxDemo = () => {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ReduxDemoView />
    </Provider>
  );
};

export default ReduxDemo;
