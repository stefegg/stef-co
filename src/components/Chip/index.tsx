export type ChipVariant = "fresh" | "stale" | "fetching";

type ChipProps = {
  label: string;
  variant?: ChipVariant;
};

const Chip = ({ label, variant }: ChipProps) => (
  <span data-variant={variant}>{label}</span>
);

export default Chip;
