/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  let sum = 0;
  const length = nums.length;
  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    
    if (length % (i + 1) === 0) {
      sum += (cur ** 2);
    }
  }
  
  return sum;
};
