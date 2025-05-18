/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const unique = [...new Set(nums)].sort((a, b) => a - b);

  if (unique.length < 3) return unique.at(-1);
  
  return unique.at(-3);
};
