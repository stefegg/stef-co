import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: unknown; alt: string }) => {
    const resolved =
      typeof src === "string" ? src : (src as { src?: string })?.src ?? "";
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolved} alt={alt} />;
  },
}));

import AboutPane from "@/app/_components/AboutPane";
import { skills } from "@/app/_utils/constants";

describe("AboutPane", () => {
  it("renders the name and profile image", () => {
    render(<AboutPane />);
    expect(screen.getByText("Stephen Egbert")).toBeInTheDocument();
    expect(screen.getByAltText("profile")).toBeInTheDocument();
  });

  it("renders the Technical Skills section with every skill group", () => {
    render(<AboutPane />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
    skills.forEach((group) => {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    });
  });
});
