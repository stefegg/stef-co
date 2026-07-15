import { render, screen, fireEvent } from "@testing-library/react";
import Radio from "./index";

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
];

describe("Radio", () => {
  it("renders the legend and its options", () => {
    render(
      <Radio
        legend="Pick one"
        name="choice"
        options={options}
        selected={null}
        onSelect={() => {}}
      />,
    );
    expect(screen.getByRole("group", { name: "Pick one" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Option A" })).toBeInTheDocument();
  });

  it("reflects the selected option", () => {
    render(
      <Radio
        legend="Pick one"
        name="choice"
        options={options}
        selected="b"
        onSelect={() => {}}
      />,
    );
    expect(screen.getByRole("radio", { name: "Option B" })).toBeChecked();
  });

  it("calls onSelect with the chosen value", () => {
    const onSelect = jest.fn();
    render(
      <Radio
        legend="Pick one"
        name="choice"
        options={options}
        selected={null}
        onSelect={onSelect}
      />,
    );
    fireEvent.click(screen.getByRole("radio", { name: "Option A" }));
    expect(onSelect).toHaveBeenCalledWith("a");
  });
});
