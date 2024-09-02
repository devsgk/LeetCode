/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  const single = nums.filter(num => num < 10);
  const double = nums.filter(num => num >= 10);
  const singleSum = single.reduce((acc, cur) => acc + cur, 0);
  const doubleSum = double.reduce((acc, cur) => acc + cur, 0);
  
  return singleSum !== doubleSum;
};