export const randomColors = ["#8e6d63", "#c2185b", "#ac47bb", "#3AA2A0", "#0388d2", "#5d6ac0", "#0080a5", "#E25052", "#7AAC5D", "#38512A", "#EA9E48", "#E58A1F", "#B47EDD", "#8433C1", "#7777E4", "#5AC4C2", "#1E1E99", "#266968", "#794F92", "#102D2D", "#006D8F", "#85E2FF", "#440072", "#BFFFFB", "#00BFB3", "#009e31"];
export const alphabetArr = Array.from(Array(26)).map((_, i) => i + 65).map(x => String.fromCharCode(x).toLowerCase());
export const getNameInitials = name => {
  const slicedAlph = name ? name.split("")[0].toUpperCase() : "";
  let lower = slicedAlph?.toLowerCase();
  const colorForName = randomColors[alphabetArr.indexOf(lower) % 26];
  return {
    colorForName: colorForName,
    slicedAlph: slicedAlph
  };
};