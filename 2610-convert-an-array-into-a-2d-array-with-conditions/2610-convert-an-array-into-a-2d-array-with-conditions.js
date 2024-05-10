/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const result = [[nums[0]]];
  
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    
    for (let j = 0; j < result.length; j++) {
      if (!result[j].includes(nums[i])) {
        result[j].push(cur);
        break;
      } else if (j === result.length - 1) {
        result.push([cur]);
        break;
      }
    }
    
  }
  
  return result;
};