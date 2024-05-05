/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let left = 0;
  let right = k;
  let sum = nums.slice(left, right).reduce((acc, cur) => acc + cur, 0);
  let max = sum;

  while (right < nums.length) {
    sum = sum + nums[right] - nums[left];
    
    if (sum > max) max = sum;
    
    left++;
    right++;
  }

  return max / k;
};