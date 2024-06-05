/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  const str = nums.reduce((acc, cur) => acc + cur, "");
  const arr = str.split("");
  
  return arr.map(el => Number(el));
};