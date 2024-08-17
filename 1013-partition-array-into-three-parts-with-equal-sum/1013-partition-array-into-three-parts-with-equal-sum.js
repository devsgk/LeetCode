/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  const equalSum = arr.reduce((acc, cur) => acc + cur, 0) / 3;
  
  let sum = 0;
  let count = 0;
  
  while (arr.length) {
    sum += arr.pop();
    
    if (sum === equalSum) {
      sum = 0;
      count++;
    }
  }

  return count >= 3;
};