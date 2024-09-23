/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const obj = {};
  const result = [];
  
  for (const num of nums) {
    if (obj[num]) {
      result.push(num);
    }
    
    obj[num] = true;
  }
  
  return result;
};
