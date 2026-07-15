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
  <fieldset>
    <legend>{legend}</legend>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={selected === option.value}
          onChange={() => onSelect(option.value)}
        />
        {option.label}
      </label>
    ))}
  </fieldset>
);

export default Radio;
