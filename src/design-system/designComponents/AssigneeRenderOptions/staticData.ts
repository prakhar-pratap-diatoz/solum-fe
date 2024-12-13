export const randomColors = [
  "#8e6d63",
  "#c2185b",
  "#ac47bb",
  "#039be5",
  "#0388d2",
  "#5d6ac0",
];
export const alphabetArr = Array.from(Array(26))
  .map((_, i) => i + 65)
  .map((x) => String.fromCharCode(x).toLowerCase());
export const getNameInitials = (name: string) => {
  const slicedAlph = name ? name.split("")[0].toUpperCase() : "";
  let lower = slicedAlph?.toLowerCase();
  const colorForName = randomColors[alphabetArr.indexOf(lower) % 6];
  return { colorForName: colorForName, slicedAlph: slicedAlph };
};
