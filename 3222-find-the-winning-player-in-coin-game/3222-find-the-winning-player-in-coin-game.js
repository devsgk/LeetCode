/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
  let xCount = x;
  let yCount = y;
  let count = 0;

  while (xCount >= 1 && yCount >= 4) {
    xCount--;
    yCount -= 4;
    count++;
  }

  if (count % 2 === 1) return "Alice"
  else return "Bob";
};
