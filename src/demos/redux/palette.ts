export const PALETTE = ["primary", "secondary", "link", "tertiary"] as const;

export type PaletteColor = (typeof PALETTE)[number];

export const toCssColor = (color: string) => `var(--${color})`;
