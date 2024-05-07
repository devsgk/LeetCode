/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let result = [];
  
  for (let i = 0; i < nums.length; i = i + 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    
    for (let i = 0; i < freq; i++) {
      result.push(val);
    }
  }
  
  return result;
};