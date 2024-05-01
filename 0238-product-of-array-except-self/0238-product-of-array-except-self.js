/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const left = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = left[i - 1] * nums[i - 1];
    }
  }
  
  const right = [];
  
  for (let i = nums.length - 1; i >=0; i--) {
    if (i === nums.length - 1) {
      right[i] = 1;
    } else {
      right[i] = right[i + 1] * nums[i + 1];
    }
  }
  
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }
  
  return result;
};