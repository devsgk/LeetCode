/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  let evenCount = 0;
  let oddCount = 0;

  for (const num of nums) {
    if (num % 2 === 0) evenCount++;
    else oddCount++;
  }

  let count = 0;
  const result = "0".repeat(evenCount) + "1".repeat(oddCount);

  return result.split("").map(el => Number(el));
};
