/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  nums.sort();

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result.push(i);
  }

  return result;
};
