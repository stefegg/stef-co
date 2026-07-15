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
    <div>
      <Toggle label="Panel mounted" checked={mounted} onChange={setMounted} />

      <Button
        disabled={!mounted}
        onClick={() =>
          queryClient.refetchQueries({ queryKey: REPOS_QUERY_KEY })
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

      {mounted && <RepoPanel onRequest={appendLog} />}

      <LogList entries={log} emptyMessage="No requests yet." />
    </div>
  );
};

export default QueryDemoView;
