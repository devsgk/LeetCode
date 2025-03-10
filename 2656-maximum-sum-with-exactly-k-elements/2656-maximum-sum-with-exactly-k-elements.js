/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let count = 0;
  let maxSum = 0;
  
  while (count < k) {
    const max = Math.max(...nums);
    const index = nums.indexOf(max);

    nums[index] = max + 1;
    maxSum += max;

    count++;
  }
  
  return maxSum;
};
