/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let total = n;
  let count = 1;
  let result = 0;
  
  while (total >= count) {
    total -= count;
    count++;
    result++;
  }
  
  return result;
};