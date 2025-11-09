/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const arr = s.split(" ");
  const sorted = arr.sort((a, b) => a.at(-1) - b.at(-1));
  const result = sorted.map(word => word.slice(0, word.length - 1));

  return result.join(" ");
};
