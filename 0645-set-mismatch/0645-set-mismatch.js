/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const n = nums.length;
  const wrongSum = nums.reduce((acc, cur) => acc + cur, 0);
  const correctSum = (n * (n + 1)) / 2;
  const unique = new Set();
  
  for (const num of nums) {
    unique.add(num);
  }
  
  const uniqueSum = [...unique].reduce((acc, cur) => acc + cur, 0);
  const missing = correctSum - uniqueSum;
  const duplicate = wrongSum - uniqueSum;

  return [duplicate, missing];
};