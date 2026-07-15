import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./index";

describe("Toggle", () => {
  it("renders its label and reflects the checked state", () => {
    render(<Toggle label="Subscribed" checked onChange={() => {}} />);
    expect(screen.getByRole("checkbox", { name: "Subscribed" })).toBeChecked();
  });

  it("calls onChange with the next value", () => {
    const onChange = jest.fn();
    render(<Toggle label="Subscribed" checked={false} onChange={onChange} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
