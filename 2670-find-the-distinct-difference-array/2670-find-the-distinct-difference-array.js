/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  const diffArr = [];
  
  for (let i = 0; i < nums.length; i++) {
    const left = new Set(nums.slice(0, i + 1)).size;
    const right = new Set(nums.slice(i + 1)).size;
    const diff = left - right;
    
    diffArr.push(diff);
  }
  
  return diffArr
};