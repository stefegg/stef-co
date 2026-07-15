import { render, screen, fireEvent } from "@testing-library/react";
import LogList from "./index";

const entries = [
  { id: "1", label: "GET /repos", timestamp: 1700000000000 },
  { id: "2", label: "cellPainted(0, 1, primary)", timestamp: 1700000001000 },
];

describe("LogList", () => {
  it("renders each entry", () => {
    render(<LogList entries={entries} />);
    expect(screen.getByText("GET /repos")).toBeInTheDocument();
    expect(screen.getByText("cellPainted(0, 1, primary)")).toBeInTheDocument();
  });

  it("renders the empty message when there are no entries", () => {
    render(<LogList entries={[]} emptyMessage="No requests yet." />);
    expect(screen.getByText("No requests yet.")).toBeInTheDocument();
  });

  it("makes entries selectable when onSelect is provided", () => {
    const onSelect = jest.fn();
    render(<LogList entries={entries} onSelect={onSelect} />);
    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(onSelect).toHaveBeenCalledWith("2");
  });
});
