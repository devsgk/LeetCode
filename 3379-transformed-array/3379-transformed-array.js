/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  const result = []
  let length = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let index = (i + nums[i] % length + length) % length;

    result.push(nums[index]);
  }

  return result;
};
