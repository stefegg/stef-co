type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle = ({ label, checked, onChange }: ToggleProps) => (
  <label className="flex cursor-pointer items-center gap-2 text-link">
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="cursor-pointer"
    />
    {label}
  </label>
);

export default Toggle;
