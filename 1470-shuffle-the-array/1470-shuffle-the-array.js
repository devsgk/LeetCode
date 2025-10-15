/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const shuffled = [];

  for (let i = 0; i < nums.length / 2; i++) {
    shuffled.push(nums[i], nums[i + n]);
  }

  return shuffled;
};
