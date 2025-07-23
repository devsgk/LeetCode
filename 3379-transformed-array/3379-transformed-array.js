/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  const result = Array.from({length: nums.length}).fill(0);
  const length = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (cur > 0) {
      const index = (i + cur) % length;

      result[i] = nums.at(index);
    } else if (cur < 0) {
      const index = (i - Math.abs(cur)) % length;
      
      result[i] = nums.at(index);
    } else {
      result[i] = cur;
    }
  }

  return result;
};
