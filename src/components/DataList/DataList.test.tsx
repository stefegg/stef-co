import { render, screen } from "@testing-library/react";
import DataList from "./index";

describe("DataList", () => {
  it("renders each label and value pair", () => {
    render(
      <DataList items={[{ id: "a", label: "pokedex", value: "12 stars" }]} />,
    );
    expect(screen.getByText("pokedex")).toBeInTheDocument();
    expect(screen.getByText("12 stars")).toBeInTheDocument();
  });

  it("renders the empty message when there are no items", () => {
    render(<DataList items={[]} emptyMessage="Nothing painted yet." />);
    expect(screen.getByText("Nothing painted yet.")).toBeInTheDocument();
  });
});
