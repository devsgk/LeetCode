/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const obj = {};
  const arr = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
      arr.push(nums[i]);
    } else {
      obj[nums[i]] = 1;
    }
  }
  
  return arr;
};