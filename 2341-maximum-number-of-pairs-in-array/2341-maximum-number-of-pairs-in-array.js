/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const obj = {};
  let numPairs = 0;
  let remainder = 0;
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  
  for (const [key, value] of Object.entries(obj)) {
    numPairs += Math.floor(value / 2);
    remainder += value % 2;
  }
  
  return [numPairs, remainder];
};