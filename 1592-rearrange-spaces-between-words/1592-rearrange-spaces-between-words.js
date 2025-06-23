/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const arr = text.split(" ");
  const words = arr.filter(el => el !== "");
  const spaces = text.length - words.join("").length;
  const spaceBetween = Math.floor(spaces / (words.length - 1));
  const spaceLeftOver = spaces - spaceBetween * (words.length - 1);

  if (words.length === 1) return words[0] + " ".repeat(spaces);

  return words.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver);
};
