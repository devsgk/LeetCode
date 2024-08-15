/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  for (let i = 0; i < m; i++) {
    const arr = grid[i];
    
    for (let j = 0; j < n; j++) {
      if (arr[j] < 0) {
        count++;
      }
    }
  }
  
  return count;
};
