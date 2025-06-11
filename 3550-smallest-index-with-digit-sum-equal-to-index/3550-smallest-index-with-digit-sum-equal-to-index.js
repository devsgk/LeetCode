/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const sum = cur.toString().split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);

    if (sum === i) return i;
  }

  return -1;
};
