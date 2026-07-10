import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tabs from "./index";

function renderTabs() {
  return render(
    <Tabs defaultValue="one">
      <Tabs.List label="Example tabs">
        <Tabs.Tab value="one">One</Tabs.Tab>
        <Tabs.Tab value="two">Two</Tabs.Tab>
        <Tabs.Tab value="three">Three</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="one">First panel</Tabs.Panel>
      <Tabs.Panel value="two">Second panel</Tabs.Panel>
      <Tabs.Panel value="three">Third panel</Tabs.Panel>
    </Tabs>,
  );
}

describe("Tabs", () => {
  it("renders only the default panel and marks its tab selected", () => {
    renderTabs();
    expect(screen.getByText("First panel")).toBeInTheDocument();
    expect(screen.queryByText("Second panel")).not.toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("switches the active panel when a tab is clicked", async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByRole("tab", { name: "Two" }));
    expect(screen.getByText("Second panel")).toBeInTheDocument();
    expect(screen.queryByText("First panel")).not.toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("wires each tab to its panel via aria-controls / aria-labelledby", () => {
    renderTabs();
    const tab = screen.getByRole("tab", { name: "One" });
    const panel = screen.getByRole("tabpanel");
    expect(tab).toHaveAttribute("aria-controls", panel.id);
    expect(panel).toHaveAttribute("aria-labelledby", tab.id);
  });

  it("moves between tabs with the arrow keys", async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByRole("tab", { name: "One" }));
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("Second panel")).toBeInTheDocument();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("throws when a subcomponent is used outside <Tabs>", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Tabs.Tab value="x">X</Tabs.Tab>)).toThrow(
      "Tabs subcomponents must be used within <Tabs>",
    );
    spy.mockRestore();
  });
});
