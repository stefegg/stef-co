import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo", () => {
  it("renders the provided text", () => {
    render(<Logo size="large" text="Stef Egbert" />);
    expect(screen.getByText("Stef Egbert")).toBeInTheDocument();
  });

  it("renders at the small size", () => {
    render(<Logo size="small" text="SE" />);
    expect(screen.getByText("SE")).toBeInTheDocument();
  });
});
