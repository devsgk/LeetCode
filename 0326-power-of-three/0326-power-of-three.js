/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false;
  }
  
  let target = n;
  
  while (target % 3 === 0) {
    target /= 3;
  }
  
  return target === 1;
};