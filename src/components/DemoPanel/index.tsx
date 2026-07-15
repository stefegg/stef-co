import type { ReactNode } from "react";

type DemoPanelProps = {
  title: string;
  blurb: string;
  description: ReactNode;
  children?: ReactNode;
};

const DemoPanel = ({ title, blurb, description, children }: DemoPanelProps) => (
  <section className="flex flex-col gap-4 font-light">
    <h2 className="text-xl text-primary">{title}</h2>
    <p className="text-link">{blurb}</p>
    <div className="text-secondary">{description}</div>
    {children ? <div>{children}</div> : null}
  </section>
);

export default DemoPanel;
