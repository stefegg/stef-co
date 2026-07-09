import { render, screen } from "@testing-library/react";
import PageWrapper from "./index";

describe("PageWrapper", () => {
  it("renders its children", () => {
    render(
      <PageWrapper>
        <p>wrapped content</p>
      </PageWrapper>
    );
    expect(screen.getByText("wrapped content")).toBeInTheDocument();
  });
});
