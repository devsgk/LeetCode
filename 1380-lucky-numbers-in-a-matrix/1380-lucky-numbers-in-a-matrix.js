/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const answer = [];
  const minObj = {};
  const maxObj = {};

  const arr = new Array(matrix[0].length).fill(0).map(() => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cur = matrix[i][j];

      arr[j].push(cur);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const min = Math.min(...matrix[i]);
  
    minObj[i] = min;
  }

  for (let i = 0; i < arr.length; i++) {
    const max = Math.max(...arr[i]);
  
    maxObj[i] = max;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cur = matrix[i][j];

      if (cur === minObj[i] && cur === maxObj[j]) {
        answer.push(cur);
      }
    }
  }

  return answer;
};
