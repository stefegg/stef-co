import { render, screen } from "@testing-library/react";
import SkillPane from "./index";
import { skills } from "../../utils/constants";

describe("SkillPane", () => {
  it("renders the Technical Skills heading and every skill group", () => {
    render(<SkillPane />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    skills.forEach((group) => {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    });
  });
});
