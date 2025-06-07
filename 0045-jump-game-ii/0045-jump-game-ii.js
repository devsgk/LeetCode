/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let near = 0;
  let far = 0;
  let count = 0;

  while (far < nums.length - 1) {
    let farthest = 0;

    for (let i = near; i <= far; i++) {
      farthest = Math.max(i + nums[i], farthest);
    }

    near = far + 1;
    far = farthest;
    count++;
  }

  return count;
};
