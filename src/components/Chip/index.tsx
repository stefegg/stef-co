export type ChipVariant = "fresh" | "stale" | "fetching";

type ChipProps = {
  label: string;
  variant?: ChipVariant;
};

const VARIANT_COLOR: Record<ChipVariant, string> = {
  fresh: "text-secondary",
  stale: "text-tertiary",
  fetching: "text-link",
};

const Chip = ({ label, variant }: ChipProps) => (
  <span
    data-variant={variant}
    className={`inline-block rounded-lg border border-divider px-2 py-0.5 text-sm ${
      variant ? VARIANT_COLOR[variant] : "text-link"
    }`}
  >
    {label}
  </span>
);

export default Chip;
