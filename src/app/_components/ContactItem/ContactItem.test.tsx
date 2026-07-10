import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: unknown; alt: string }) => {
    const resolved = typeof src === "string" ? src : "";
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolved} alt={alt} />;
  },
}));

import ContactItem from "./index";

describe("ContactItem", () => {
  it("renders the inner text and the icon image", () => {
    render(<ContactItem icon="/icons/gmail.svg" innerText="Email me" />);
    expect(screen.getByText("Email me")).toBeInTheDocument();
  });
});
