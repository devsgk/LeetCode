/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  let gcd = min;
  
  while (gcd >= 1) {
    if (max % gcd === 0 && min % gcd === 0) {
      return gcd;
    } else {
      gcd--;
    }
  }
  
  return gcd;
};
