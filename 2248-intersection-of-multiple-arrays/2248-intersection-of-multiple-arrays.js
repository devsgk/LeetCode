/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const obj = {};
  const result = [];
  
  for (const arr of nums) {
    for (const num of arr) {
      obj[num] = obj[num] ? obj[num] + 1 : 1;
    }
  }
  
  for (const [key, value] of Object.entries(obj)) {
    if (value === nums.length) {
      result.push(Number(key));
    }
  }
  
  return result.sort((a, b) => a - b);
};
