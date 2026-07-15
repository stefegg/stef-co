import type { ReactNode } from "react";

export type DataListItem = {
  id: string;
  label: ReactNode;
  value: ReactNode;
};

type DataListProps = {
  items: DataListItem[];
  emptyMessage?: string;
};

const DataList = ({
  items,
  emptyMessage = "Nothing to show.",
}: DataListProps) => {
  if (items.length === 0) return <p>{emptyMessage}</p>;

  return (
    <dl>
      {items.map((item) => (
        <div key={item.id}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DataList;
