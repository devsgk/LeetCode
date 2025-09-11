/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  if (nums.length === 1) return 0;

  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let diff = Math.abs(min - max);

  if (diff <= k * 2) return 0;

  return Math.abs((min + k) - (max - k));
};
