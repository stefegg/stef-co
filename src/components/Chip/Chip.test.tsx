import { render, screen } from "@testing-library/react";
import Chip from "./index";

describe("Chip", () => {
  it("renders its label", () => {
    render(<Chip label="stale" />);
    expect(screen.getByText("stale")).toBeInTheDocument();
  });

  it("exposes its variant", () => {
    render(<Chip label="fetching" variant="fetching" />);
    expect(screen.getByText("fetching")).toHaveAttribute(
      "data-variant",
      "fetching",
    );
  });
});
