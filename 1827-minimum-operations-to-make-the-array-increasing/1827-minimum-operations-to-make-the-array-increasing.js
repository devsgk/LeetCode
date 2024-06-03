/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let count = 0;
  
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];
    
    if (cur <= prev) {
      count += prev - cur + 1;
      nums[i] += nums[i - 1] - nums[i] + 1;
    }
  }
  
  return count;
};