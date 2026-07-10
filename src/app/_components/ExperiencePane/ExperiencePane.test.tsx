import { render, screen } from "@testing-library/react";
import ExperiencePane from "./index";

const experience = {
  title: "Senior Frontend Engineer",
  dates: "Sept 2025 - May 2026",
  company: "Palla Financial",
  location: "Remote",
  duties: ["Led the migration to XState", "Built the component library"],
};

describe("ExperiencePane", () => {
  it("renders the role header fields", () => {
    render(<ExperiencePane experience={experience} />);
    expect(screen.getByText("Senior Frontend Engineer")).toBeInTheDocument();
    expect(screen.getByText("Sept 2025 - May 2026")).toBeInTheDocument();
    expect(screen.getByText("Palla Financial")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
  });

  it("renders each duty as a list item", () => {
    render(<ExperiencePane experience={experience} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(experience.duties.length);
    expect(screen.getByText("Led the migration to XState")).toBeInTheDocument();
  });
});
