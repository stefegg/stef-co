export type LogEntry = {
  id: string;
  label: string;
  timestamp: number;
};

type LogListProps = {
  entries: LogEntry[];
  emptyMessage?: string;
  /** When provided, entries become selectable (e.g. Redux time travel). */
  onSelect?: (id: string) => void;
  /** The entry the app is currently sitting at. */
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
  if (entries.length === 0) return <p>{emptyMessage}</p>;

  return (
    <ol>
      {entries.map((entry) => {
        const isActive = entry.id === activeId;
        const content = (
          <>
            <time dateTime={new Date(entry.timestamp).toISOString()}>
              {formatTime(entry.timestamp)}
            </time>
            <span>{entry.label}</span>
          </>
        );

        return (
          <li key={entry.id} aria-current={isActive ? "true" : undefined}>
            {onSelect ? (
              <button type="button" onClick={() => onSelect(entry.id)}>
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
