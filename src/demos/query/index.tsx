"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@/lib/query";
import QueryDemoView from "./QueryDemoView";

const QueryDemo = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <QueryDemoView />
    </QueryClientProvider>
  );
};

export default QueryDemo;
