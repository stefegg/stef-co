import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: unknown; alt: string }) => {
    const resolved = typeof src === "string" ? src : "";
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolved} alt={alt} />;
  },
}));

import ProfileCard from "./index";

describe("ProfileCard", () => {
  it("renders the profile image, name, and title", () => {
    render(<ProfileCard />);
    expect(screen.getByAltText("profile")).toBeInTheDocument();
    expect(screen.getByText("Stephen Egbert")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });
});
