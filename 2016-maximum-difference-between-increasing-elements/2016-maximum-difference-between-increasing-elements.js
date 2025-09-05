/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let min = nums[0];
  let maxDiff = 0;

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];

    min = Math.min(min, cur);

    if (cur > min) maxDiff = Math.max(maxDiff, cur - min);
  }

  return maxDiff === 0 ? -1 : maxDiff;
};
