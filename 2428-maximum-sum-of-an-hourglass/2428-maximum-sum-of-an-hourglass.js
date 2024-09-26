/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
  const arr = [];
  
  for (let i = 0; i < grid.length - 2; i++) {
    arr.push(grid.slice(i, i + 3));
  }
  
  const obj = {
    first : [],
    middle: [],
    last: [],
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const cur = arr[i][j];
      
      for (let k = 0; k <= cur.length - 3; k++) {
        const candidate = cur.slice(k, k + 3);
        
        if (j === 0) {
          obj.first.push(candidate.reduce((acc, cur) => acc + cur, 0))
        } else if (j === 1) {
          obj.middle.push(candidate[1]);
        } else {
          obj.last.push(candidate.reduce((acc, cur) => acc + cur, 0));
        }
      }
    }
  }

  let max = 0;
  
  for (let i = 0; i < obj.first.length; i++) {
    const sum = obj.first[i] + obj.middle[i] + obj.last[i];
    
    max = Math.max(max, sum);
  }
  
  return max;
};
