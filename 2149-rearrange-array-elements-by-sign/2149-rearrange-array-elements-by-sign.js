/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const positive = [];
  const negative = [];
  const result = [];
  
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(positive.pop());
    } else {
      result.push(negative.pop());
    }
  }
  
  return result;
};