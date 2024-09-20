/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let count = 0;
  
  for (const num of nums) {
    if (num % 3 === 0) continue;
    
    const diff = 3 - (num % 3);
    
    count = count + Math.min(1, diff);
  }
  
  return count;
};
