export const logoTextGen = (size: string) => {
  const large = "text-7xl";
  const small = "text-4xl";

  if (size === "large") {
    return `font-outline-3 text-black ${large}`;
  }
  if (size === "small") {
    return `font-outline-4 text-secondary ${small}`;
  }
};

export const logoLineGen = (size: string) => {
  const large = "h-[16px] w-full mt-3 border-2";
  const small = "h-[6px] w-full mt-1 border";

  if (size === "large") {
    return `bg-black border-link ${large}`;
  }
  if (size === "small") {
    return `bg-secondary border-primary ${small}`;
  }
};

