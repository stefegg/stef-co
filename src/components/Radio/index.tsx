import type { ReactNode } from "react";

export type RadioOption = {
  value: string;
  label: ReactNode;
};

type RadioProps = {
  legend: string;
  name: string;
  options: RadioOption[];
  selected: string | null;
  onSelect: (value: string) => void;
};

const Radio = ({ legend, name, options, selected, onSelect }: RadioProps) => (
  <fieldset className="flex flex-col gap-2 font-light">
    <legend className="text-link">{legend}</legend>
    {options.map((option) => (
      <label
        key={option.value}
        className="flex cursor-pointer items-center gap-2 text-secondary"
      >
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={selected === option.value}
          onChange={() => onSelect(option.value)}
          className="cursor-pointer"
        />
        {option.label}
      </label>
    ))}
  </fieldset>
);

export default Radio;
