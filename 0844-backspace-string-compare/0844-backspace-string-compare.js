/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const arr1 = [];
  const arr2 = [];

  for (const letter of s) {
    if (letter !== "#") {
      arr1.push(letter);
    } else {
      arr1.pop();
    }
  }

  for (const letter of t) {
    if (letter !== "#") {
      arr2.push(letter);
    } else {
      arr2.pop();
    }
  }

  return arr1.join("") === arr2.join("");
};
