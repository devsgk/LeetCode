/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.ceil((left + right) / 2);

  while (mid !== left && mid !== right) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
      mid = Math.ceil((left + right) / 2);
    } else if (nums[mid] > target) {
      right = mid;
      mid = Math.ceil((left + right) / 2);
    }
  }
  
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  
  return -1;
};