/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let first = Infinity;
  let second = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    
    if (cur > first && cur > second) {
      return true;
    }
    
    if (cur > first) {
      second = cur;
    } else {
      first = cur;
    }
  }
  
  return false;
};