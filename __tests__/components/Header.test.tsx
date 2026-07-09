import { render, screen } from "@testing-library/react";
import Header from "@/app/_components/Header";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from "next/navigation";

const mockUsePathname = usePathname as jest.Mock;

describe("Header", () => {
  it("renders all five nav links with accessible labels", () => {
    mockUsePathname.mockReturnValue("/");
    render(<Header />);
    ["Home", "About", "Experience", "Projects", "Contact"].forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });

  it("marks the current route as active based on the pathname", () => {
    mockUsePathname.mockReturnValue("/about");
    render(<Header />);
    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink.parentElement).toHaveClass("border-secondary");

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink.parentElement).not.toHaveClass("border-secondary");
  });
});
