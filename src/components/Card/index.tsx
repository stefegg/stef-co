import type { ReactNode, Ref } from "react";

type CardProps = {
  label: string;
  active?: boolean;
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

const Card = ({ label, active = false, children, ref }: CardProps) => (
  <div
    ref={ref}
    data-active={active}
    className={`flex flex-col gap-2 rounded-lg border p-4 font-light ${
      active ? "border-secondary" : "border-divider opacity-50"
    }`}
  >
    <h3 className="text-primary">{label}</h3>
    {children}
  </div>
);

export default Card;
