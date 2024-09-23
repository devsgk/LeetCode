/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const seen = new Set();
  const result = [];
  
  for (const num of nums) {
    if (seen.has(num)) {
      result.push(num);
    }
    
    seen.add(num);
  }
  
  return result;
};
