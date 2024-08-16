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

export const getFilter = (appTheme: string) => {
  if (appTheme === "light") {
    return "invert(16%) sepia(98%) saturate(2729%) hue-rotate(195deg) brightness(103%) contrast(100%)";
  }
  if (appTheme === "classic") {
    return "invert(86%) sepia(21%) saturate(3341%) hue-rotate(360deg) brightness(105%) contrast(101%)";
  }
  if (appTheme === "dark") {
    return "invert(72%) sepia(35%) saturate(6167%) hue-rotate(219deg) brightness(101%) contrast(98%)";
  }
};
