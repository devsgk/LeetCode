/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const str = nums[i] + nums[j];
        if (str === target) {
          count++;
        }
      }
    }
  }
  
  return count;
};