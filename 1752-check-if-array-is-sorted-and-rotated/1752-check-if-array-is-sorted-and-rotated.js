/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let index = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur > next) {
      if (index !== -1) return false;

      index = i;
    }
  }

  if (index === -1) return true;
  
  const rotated = nums.slice(index + 1).concat(nums.slice(0, index + 1));

  for (let i = 0; i < rotated.length - 1; i++) {
    if (rotated[i] > rotated[i + 1]) return false;
  }

  return true;
};
