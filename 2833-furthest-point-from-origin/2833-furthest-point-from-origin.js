/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
  let leftCount = 0;
  let rightCount = 0;
  let points = 0;
  
  for (const move of moves) {
    if (move === "L") leftCount++;
    if (move === "R") rightCount++;
    if (move === "_") points++;
  }

  return Math.abs(leftCount - rightCount) + points;
};
