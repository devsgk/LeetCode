/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const arr = [];

  for (let i = 0; i < numRows; i++) {
    const subArr = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        subArr.push(1);
      } else {
        subArr.push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
    }

    arr.push(subArr);
  }

  return arr;
};
