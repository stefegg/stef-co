export type LogEntry = {
  id: string;
  label: string;
  timestamp: number;
};

type LogListProps = {
  entries: LogEntry[];
  emptyMessage?: string;
  onSelect?: (id: string) => void;
  activeId?: string;
};

const formatTime = (timestamp: number) =>
  new Date(timestamp).toLocaleTimeString();

const LogList = ({
  entries,
  emptyMessage = "No entries yet.",
  onSelect,
  activeId,
}: LogListProps) => {
  if (entries.length === 0)
    return <p className="font-light text-secondary">{emptyMessage}</p>;

  return (
    <ol className="flex flex-col gap-1 font-light">
      {entries.map((entry) => {
        const isActive = entry.id === activeId;
        const content = (
          <span className="flex gap-3 text-sm">
            <time
              dateTime={new Date(entry.timestamp).toISOString()}
              className="text-link"
            >
              {formatTime(entry.timestamp)}
            </time>
            <span className={isActive ? "text-primary" : "text-secondary"}>
              {entry.label}
            </span>
          </span>
        );

        return (
          <li key={entry.id} aria-current={isActive ? "true" : undefined}>
            {onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(entry.id)}
                className="cursor-pointer text-left hover:opacity-80"
              >
                {content}
              </button>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default LogList;
