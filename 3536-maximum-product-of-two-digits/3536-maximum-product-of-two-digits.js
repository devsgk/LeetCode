/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
  const nums = n.toString().split("").map(el => Number(el));

  nums.sort((a, b) => b - a);

  return nums[0] * nums[1];
};
