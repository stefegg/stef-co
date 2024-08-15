export const logoTextGen = (appTheme: string, size: string) => {
  const large = "text-7xl";
  const small = "text-4xl";
  if (appTheme === "classic" && size === "large") {
    return `font-outline-2 text-${appTheme}-border ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `font-outline-1 text-${appTheme}-text ${small}`;
  }
  if (appTheme === "light" && size === "large") {
    return `font-outline-5 text-${appTheme}-border  ${large}`;
  }
  if (appTheme === "light" && size === "small") {
    return `font-outline-6 text-${appTheme}-text ${small}`;
  }
  if (appTheme === "dark" && size === "large") {
    return `font-outline-3 text-black  ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `font-outline-4 text-${appTheme}-secondary ${small}`;
  }
};

export const logoLineGen = (appTheme: string, size: string) => {
  const large = "h-[16px] w-full mt-3 border-2";
  const small = "h-[6px] w-full mt-1 border";
  if (appTheme === "classic" && size === "large") {
    return `bg-${appTheme}-border border-${appTheme}-text ${large}`;
  }
  if (appTheme === "classic" && size === "small") {
    return `bg-${appTheme}-text border-${appTheme}-border ${small}`;
  }
  if (appTheme === "light" && size === "large") {
    return `bg-${appTheme}-border border-${appTheme}-text ${large}`;
  }
  if (appTheme === "light" && size === "small") {
    return `bg-${appTheme}-text border-${appTheme}-border ${small}`;
  }

  if (appTheme === "dark" && size === "large") {
    return `bg-black border-${appTheme}-border ${large}`;
  }
  if (appTheme === "dark" && size === "small") {
    return `bg-${appTheme}-secondary border-${appTheme}-text ${small}`;
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

export const calendarFilter = (appTheme: string) => {
  if (appTheme === "dark") {
    return "invert(65%) sepia(68%) saturate(2323%) hue-rotate(127deg) brightness(100%) contrast(98%)";
  }
  if (appTheme === "light") {
    return "invert(16%) sepia(98%) saturate(2729%) hue-rotate(195deg) brightness(103%) contrast(100%)";
  }
  if (appTheme === "classic") {
    return "invert(45%) sepia(100%) saturate(842%) hue-rotate(88deg) brightness(98%) contrast(101%)";
  }
};

export const arrowFilter = (appTheme: string) => {
  if (appTheme === "dark") {
    return "invert(68%) sepia(55%) saturate(3631%) hue-rotate(218deg) brightness(98%) contrast(101%)";
  }
  if (appTheme === "light") {
    return "invert(45%) sepia(100%) saturate(842%) hue-rotate(88deg) brightness(98%) contrast(101%)";
  }
  if (appTheme === "classic") {
    return "invert(86%) sepia(12%) saturate(3864%) hue-rotate(357deg) brightness(104%) contrast(105%)";
  }
};
