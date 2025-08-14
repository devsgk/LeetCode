/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.prefixSum = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};