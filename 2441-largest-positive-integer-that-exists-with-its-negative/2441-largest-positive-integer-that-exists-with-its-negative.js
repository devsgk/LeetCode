/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  nums.sort((a, b) => b - a);
  
  for (const num of nums) {
    if (nums.includes(-num)) {
      return num;
    }
  }
  
  return -1;
};
