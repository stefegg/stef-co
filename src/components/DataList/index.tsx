import type { ReactNode } from "react";

export type DataListItem = {
  id: string;
  label: ReactNode;
  value: ReactNode;
};

type DataListProps = {
  items: DataListItem[];
  emptyMessage?: string;
  labelHeader?: string;
  valueHeader?: string;
};

const DataList = ({
  items,
  emptyMessage = "Nothing to show.",
  labelHeader,
  valueHeader,
}: DataListProps) => {
  if (items.length === 0)
    return <p className="font-light text-secondary">{emptyMessage}</p>;

  return (
    <div className="flex flex-col gap-1 font-light text-sm">
      {labelHeader && valueHeader && (
        <div className="flex justify-between gap-4 border-b border-divider pb-1 text-secondary">
          <span>{labelHeader}</span>
          <span>{valueHeader}</span>
        </div>
      )}
      <dl className="flex flex-col gap-1">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between gap-4">
            <dt className="text-link">{item.label}</dt>
            <dd className="text-tertiary">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DataList;
