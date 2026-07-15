import { render, screen } from "@testing-library/react";
import AboutPane from "./index";

describe("AboutPane", () => {
  it("renders the bio paragraphs", () => {
    render(<AboutPane />);
    expect(
      screen.getByText(
        /building things on the internet since the days of dial up/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I also care deeply about giving back/i),
    ).toBeInTheDocument();
  });
});
