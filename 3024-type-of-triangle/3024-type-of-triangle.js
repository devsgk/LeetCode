/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
  const [a, b, c] = nums;
  const condition1 = a + b > c;
  const condition2 = a + c > b;
  const condition3 = b + c > a;

  if (!(condition1 && condition2 && condition3)) return "none";
  if (a !== b && b !== c) return "scalene";
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isosceles";
};
