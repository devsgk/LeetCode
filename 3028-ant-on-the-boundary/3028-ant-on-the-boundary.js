/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  const arr = [];
  let sum = 0;
  let count = 0;
  
  for (const num of nums) {
    sum += num;
    arr.push(sum);
  }
  
  return arr.filter(sum => sum ===0).length;
};
