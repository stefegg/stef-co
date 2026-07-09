import { render, screen } from "@testing-library/react";
import ProjectPane from "@/app/_components/ProjectPane";

const base = {
  title: "StefCo. Store",
  description: "A full stack ecommerce site built as a personal project.",
  techStack: ["React", "Typescript", "Prisma"],
};

describe("ProjectPane", () => {
  it("renders title, description, and every tech stack item", () => {
    render(<ProjectPane project={{ ...base, link: "https://example.com" }} />);
    expect(screen.getByText("StefCo. Store")).toBeInTheDocument();
    expect(screen.getByText(base.description)).toBeInTheDocument();
    base.techStack.forEach((tech) =>
      expect(screen.getByText(tech)).toBeInTheDocument()
    );
  });

  it('labels github links as "Github Repo"', () => {
    render(
      <ProjectPane project={{ ...base, link: "https://github.com/stefegg/x" }} />
    );
    expect(
      screen.getByRole("link", { name: "Github Repo" })
    ).toBeInTheDocument();
  });

  it('labels non-github links as "Live Link"', () => {
    render(<ProjectPane project={{ ...base, link: "https://example.com" }} />);
    expect(screen.getByRole("link", { name: "Live Link" })).toBeInTheDocument();
  });
});
