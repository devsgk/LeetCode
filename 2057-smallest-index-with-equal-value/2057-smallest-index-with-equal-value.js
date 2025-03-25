/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
  const candidates = [];

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const index = i % 10;
    
    if (cur === index) candidates.push(i)
  }
  
  if (candidates.length === 0) return -1;

  return Math.min(...candidates);
};
