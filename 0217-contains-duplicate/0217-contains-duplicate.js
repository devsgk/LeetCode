/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();
  
  for (const num of nums) {
    set.add(num);
  }
  
  return set.size === nums.length ? false : true;
};