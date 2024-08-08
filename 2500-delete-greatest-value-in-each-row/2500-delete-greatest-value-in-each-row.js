/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  for (const array of grid) {
    array.sort((a, b) => a - b);
  }
  
  let answer = 0;
  
  while (grid[0].length) {
    let max = 0;
    for (const array of grid) {
      max = Math.max(array.pop(), max);
    }
    answer += max;
    max = 0;
  }
  
  return answer;
};