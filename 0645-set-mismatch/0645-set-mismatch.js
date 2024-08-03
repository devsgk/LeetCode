/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  nums.sort((a, b) => a - b);
  
  const obj = {};
  let duplicated;
  let missing = 1;
  
  for (const num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    
    if (obj[num] === 2) {
      duplicated = num;
    }
  }
  
  while (missing <= nums.at(-1)) {
    if (!obj[missing]) {
      break;
    }
    
    missing++;
  }
  
  return [duplicated, missing];
};