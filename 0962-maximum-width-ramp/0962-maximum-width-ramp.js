/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0 || nums[i] < nums[stack.at(-1)]) {
      stack.push(i);
    }
  }
  
  let max = 0;
  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length > 0 && nums[stack.at(-1)] <= nums[j]) {
      const index = stack.pop();
      
      max = Math.max(j - index, max);
    }
  }
  
  return max;
};
