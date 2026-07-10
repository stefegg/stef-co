import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "./index";

describe("ThemeSwitcher", () => {
  it("renders a labeled theme radiogroup", () => {
    render(<ThemeSwitcher />);
    expect(
      screen.getByRole("radiogroup", { name: /color theme/i }),
    ).toBeInTheDocument();
  });

  it("applies the chosen theme to the document", () => {
    render(<ThemeSwitcher />);
    fireEvent.click(screen.getByRole("radio", { name: /dark theme/i }));
    fireEvent.click(screen.getByRole("radio", { name: /ember theme/i }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("ember");
  });
});
