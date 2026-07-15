import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
  it("renders its label and children", () => {
    render(
      <Card label="reviewing">
        <p>Body</p>
      </Card>,
    );
    expect(
      screen.getByRole("heading", { name: "reviewing", level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("exposes its active state", () => {
    const { container } = render(<Card label="idle" active />);
    expect(container.firstChild).toHaveAttribute("data-active", "true");
  });
});
