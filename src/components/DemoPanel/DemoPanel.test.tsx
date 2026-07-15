import { render, screen } from "@testing-library/react";
import DemoPanel from "./index";

describe("DemoPanel", () => {
  it("renders the title, blurb, description and children", () => {
    render(
      <DemoPanel
        title="Zustand"
        blurb="Only the components that select a value re-render."
        description={<p>Hit increment and watch the counters.</p>}
      >
        <p>Demo body.</p>
      </DemoPanel>,
    );

    expect(
      screen.getByRole("heading", { name: "Zustand", level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Only the components that select a value re-render."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Hit increment and watch the counters."),
    ).toBeInTheDocument();
    expect(screen.getByText("Demo body.")).toBeInTheDocument();
  });

  it("renders without children", () => {
    render(
      <DemoPanel
        title="React Context"
        blurb="Internal coordination inside one component."
        description={<p>The tabs are the demo.</p>}
      />,
    );
    expect(screen.getByText("The tabs are the demo.")).toBeInTheDocument();
  });
});
