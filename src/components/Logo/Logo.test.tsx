import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo", () => {
  it("renders the provided text", () => {
    render(<Logo text="Stef Egbert" />);
    expect(screen.getByText("Stef Egbert")).toBeInTheDocument();
  });
});
