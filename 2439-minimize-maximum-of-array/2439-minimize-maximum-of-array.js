/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let sum = 0;
  let max = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const average = Math.ceil(sum / (i + 1));
    
    max = Math.max(max, average);
  }
  
  return max;
};
