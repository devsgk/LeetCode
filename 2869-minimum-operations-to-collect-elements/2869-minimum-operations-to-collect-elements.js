/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const set = new Set();
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    count += 1;

    const popped = nums[i];

    if (popped <= k && !set.has(popped)) set.add(popped); 
    if (set.size === k) return count;
  }
};
