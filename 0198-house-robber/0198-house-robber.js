/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp.at(-1);
}
