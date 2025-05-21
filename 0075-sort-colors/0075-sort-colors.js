/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count = [0, 0, 0];
  let index = 0;

  for (const num of nums) {
    count[num]++;
  }

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j < count[i]; j++) {
      nums[index] = i;
      index++;
    }
  }

  return nums;
};
