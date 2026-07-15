import type { ReactNode, Ref } from "react";

type CardProps = {
  label: string;
  /** Lit when true, dimmed when false (XState: current state; Zustand: subscribed). */
  active?: boolean;
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

const Card = ({ label, active = false, children, ref }: CardProps) => (
  <div ref={ref} data-active={active}>
    <h3>{label}</h3>
    {children}
  </div>
);

export default Card;
