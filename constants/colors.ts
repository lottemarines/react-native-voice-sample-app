export const colorCodes = {
  totalColor: "#FFFFCC",
  backgroundColor: "#363636",
  activeColor: "#9c958c",
  passiveColor: "#d0d1c9",
};

// colors.tabs...と使う
export default {
  ...colorCodes,
  headers: {
    activeColor: "#d69494",
  },
  tabs: {
    activeColor: "#542f1f",
    activeBackgroundColor: "#ffa8a8",
    passiveBackgroundColor: "#ffffff",
    underlineColor: "#bd6464",
  },
  buttons: {
    backgroundColor: "#dba7a2",
    titleColor: "black",
    disabledBackgroundColor: "black",
    disabledTitleColor: "white",
  },
};
