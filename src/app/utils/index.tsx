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
