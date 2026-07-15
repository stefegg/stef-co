"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@/lib/query";
import Chip, { type ChipVariant } from "@/components/Chip";
import DataList from "@/components/DataList";
import { fetchRepos, REPOS_QUERY_KEY, STALE_TIME } from "../api";

type RepoPanelProps = {
  onRequest: (label: string) => void;
};

const RepoPanel = ({ onRequest }: RepoPanelProps) => {
  const { data, isPending, isFetching, isStale, dataUpdatedAt } = useQuery({
    queryKey: REPOS_QUERY_KEY,
    queryFn: () => fetchRepos(onRequest),
    staleTime: STALE_TIME,
  });

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const secondsLeft = Math.max(
    0,
    Math.ceil((dataUpdatedAt + STALE_TIME - now) / 1000),
  );

  const variant: ChipVariant = isFetching
    ? "fetching"
    : isStale
      ? "stale"
      : "fresh";

  const label = isFetching
    ? "fetching"
    : isStale
      ? "stale"
      : `fresh · ${secondsLeft}s left`;

  return (
    <div className="flex flex-col gap-3">
      <Chip label={label} variant={variant} />

      {isPending ? (
        <p className="font-light text-secondary">Loading…</p>
      ) : (
        <DataList
          items={(data ?? []).map((repo) => ({
            id: String(repo.id),
            label: repo.name,
            value: `${repo.stargazers_count} ★`,
          }))}
          emptyMessage="No repos."
        />
      )}
    </div>
  );
};

export default RepoPanel;
