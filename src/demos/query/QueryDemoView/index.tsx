"use client";
import { useCallback, useState } from "react";
import { useQueryClient } from "@/lib/query";
import Button from "@/components/Button";
import Toggle from "@/components/Toggle";
import LogList, { type LogEntry } from "@/components/LogList";
import RepoPanel from "../RepoPanel";
import { REPOS_QUERY_KEY } from "../api";

const QueryDemoView = () => {
  const queryClient = useQueryClient();
  const [mounted, setMounted] = useState(true);
  const [log, setLog] = useState<LogEntry[]>([]);

  const appendLog = useCallback((label: string) => {
    setLog((entries) => [
      ...entries,
      { id: `${Date.now()}-${entries.length}`, label, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Toggle label="Panel mounted" checked={mounted} onChange={setMounted} />
        <Button
          disabled={!mounted}
          onClick={() =>
            queryClient.refetchQueries(
              { queryKey: REPOS_QUERY_KEY },
              { cancelRefetch: false },
            )
          }
        >
          Refetch
        </Button>
        <Button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: REPOS_QUERY_KEY })
          }
        >
          Invalidate
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-3">
          {mounted && <RepoPanel onRequest={appendLog} />}
        </div>
        <div className="col-span-6 md:col-span-3">
          <h3 className="mb-2 text-primary">Request log</h3>
          <LogList entries={log} emptyMessage="No requests yet." />
        </div>
      </div>
    </div>
  );
};

export default QueryDemoView;
