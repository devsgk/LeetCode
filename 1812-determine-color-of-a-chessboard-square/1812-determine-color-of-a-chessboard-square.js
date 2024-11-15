/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const [letter, number] = coordinates.split("");
  
  const odd = ["a", "c", "e", "g"];
  const even = ["b", "d", "f", "h"];
  
  if (odd.includes(letter)) {
    if (Number(number) % 2 === 0) {
      return true;
    } else return false;
  } else {
    if (Number(number) % 2 === 0) {
      return false;
    } else return true;
  }
};
