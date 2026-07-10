import { render, screen } from "@testing-library/react";
import HeaderItem from "./index";

const StubIcon = () => <svg data-testid="stub-icon" />;

const baseProps = {
  href: "/about",
  title: "About",
  ariaLabel: "About",
  Icon: StubIcon,
};

describe("HeaderItem", () => {
  it("renders the title, icon, and a link to href", () => {
    render(<HeaderItem {...baseProps} activeLink="/" />);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByTestId("stub-icon")).toBeInTheDocument();
  });

  it("marks itself active when activeLink matches href", () => {
    render(<HeaderItem {...baseProps} activeLink="/about" />);
    expect(screen.getByRole("link", { name: "About" })).toHaveClass(
      "text-primary",
    );
  });

  it("is not active when activeLink differs from href", () => {
    render(<HeaderItem {...baseProps} activeLink="/" />);
    expect(screen.getByRole("link", { name: "About" })).not.toHaveClass(
      "text-primary",
    );
  });
});
