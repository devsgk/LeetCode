/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const left = nums[i - k];
    const right = nums[i + k];

    if (left && (cur < left)) continue;
    if (right && (cur < right)) continue;

    sum += cur;
  }

  return sum;
};
