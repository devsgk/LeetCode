/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const flatted = grid.flat();
  let count = 0;
  
  for (const num of flatted) {
    if (num < 0) {
      count++;
    }
  }
  
  return count;
};
