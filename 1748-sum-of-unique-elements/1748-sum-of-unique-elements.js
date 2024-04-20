/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const obj = {};
  
  nums.forEach(num => {
    obj[num] = obj[num] ? obj[num] + 1: 1;
  });
  
  
  let sum = 0;
  
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      sum += Number(key);
    }
  }
  
  return sum;
};