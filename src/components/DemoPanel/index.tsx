import type { ReactNode } from "react";

type DemoPanelProps = {
  title: string;
  blurb: string;
  description: ReactNode;
  children?: ReactNode;
};

const DemoPanel = ({ title, blurb, description, children }: DemoPanelProps) => (
  <section>
    <h2>{title}</h2>
    <p>{blurb}</p>
    <div>{description}</div>
    {children ? <div>{children}</div> : null}
  </section>
);

export default DemoPanel;
