export const themeGen = (appTheme: string) => {
  if (appTheme === "Classic") {
    return "bg-newNavy text-yellow border-red";
  } else {
    return "bg-black text-green border-green";
  }
};

export const hoverGen = (appTheme: string) => {
  if (appTheme === "Classic") {
    return "hover:bg-navy";
  } else {
    return "hover:bg-charcoal";
  }
};

export const logoTextGen = (appTheme: string, size: string) => {
  const large = "text-7xl pt-[20%]";
  const small = "text-4xl pt-1";
  if (appTheme === "Classic" && size === "large") {
    return `font-outline-2 text-red bg-navy ${large}`;
  }
  if (appTheme === "Classic" && size === "small") {
    return `font-outline-1 text-yellow ${small}`;
  }
  if (appTheme === "Dark" && size === "large") {
    return `font-outline-3 text-black bg-black ${large}`;
  }
  if (appTheme === "Dark" && size === "small") {
    return `font-outline-4 text-green bg-black ${small}`;
  }
};

export const logoLineGen = (appTheme: string, size: string) => {
  const large = "h-[24px] w-1/4 mt-3 border-2";
  const small = "h-[6px] w-1/2 mt-1 border";
  if (appTheme === "Classic" && size === "large") {
    return `bg-red border-yellow ${large}`;
  }
  if (appTheme === "Classic" && size === "small") {
    return `bg-yellow border-red ${small}`;
  }
  if (appTheme === "Dark" && size === "large") {
    return `bg-black border-green ${large}`;
  }
  if (appTheme === "Dark" && size === "small") {
    return `bg-black border-green ${small}`;
  }
};

export const pagePadding = () => {
  return `px-8 pt-8 pb-4`;
};
