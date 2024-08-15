export const logoTextGen = (size: string) => {
  const large = "text-7xl";
  const small = "text-4xl";

  if (size === "large") {
    return `font-outline-3 text-black ${large}`;
  }
  if (size === "small") {
    return `font-outline-4 text-[#03DAc6] ${small}`;
  }
};

export const logoLineGen = (size: string) => {
  const large = "h-[16px] w-full mt-3 border-2";
  const small = "h-[6px] w-full mt-1 border";

  if (size === "large") {
    return `bg-black border-[#3700b3] ${large}`;
  }
  if (size === "small") {
    return `bg-[#03DAc6] border-psy ${small}`;
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
