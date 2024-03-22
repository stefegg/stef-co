export const logoTextGen = (appTheme: string, size: string) => {
  const large = "text-7xl pt-[20%]";
  const small = "text-4xl pt-1";
  if (appTheme === "classic" && size === "large") {
    return `font-outline-2 text-${appTheme}-border bg-${appTheme}-bodyBg ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `font-outline-1 text-${appTheme}-text ${small}`;
  }
  if (appTheme === "dark" && size === "large") {
    return `font-outline-3 text-black bg-black ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `font-outline-4 text-${appTheme}-text bg-black ${small}`;
  }
};

export const logoLineGen = (appTheme: string, size: string) => {
  const large = "h-[24px] w-1/4 mt-3 border-2";
  const small = "h-[6px] w-1/2 mt-1 border";
  if (appTheme === "classic" && size === "large") {
    return `bg-${appTheme}-border border-${appTheme}-text ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `bg-${appTheme}-text border-${appTheme}-border ${small}`;
  }
  if (appTheme === "dark" && size === "large") {
    return `bg-black border-${appTheme}-border ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `bg-black border-${appTheme}-text ${small}`;
  }
};

export const pagePadding = () => {
  return `px-8 pt-6 pb-4 pl-10`;
};

export const currencyGen = (currency: string) => {
  if (currency === "USD") {
    return "$";
  } else return "R";
};

export const getFilter = (appTheme: string) => {
  if (appTheme === "classic") {
    return "invert(86%) sepia(21%) saturate(3341%) hue-rotate(360deg) brightness(105%) contrast(101%)";
  }
  if (appTheme === "dark") {
    return "invert(72%) sepia(35%) saturate(6167%) hue-rotate(219deg) brightness(101%) contrast(98%)";
  }
};
