/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const arr = grid.flat().sort((a, b) => a - b);
  const result = [];

  let count = 1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result.push(arr[i]);
      break;
    }
  }
  
  while (count <= arr.length) {
    if (!arr.includes(count)) {
      result.push(count);
      break;
    }
    
    count++;
  }

  return result;
};
