/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max1 = 0;
  let max2 = 0;
  let arr = nums.slice();

  for (const num of arr) {
    max1 = Math.max(num, max1);
  }
  
  const index = arr.indexOf(max1);

  arr.splice(index, 1);

  for (const num of arr) {
    max2 = Math.max(num, max2);
  }
  
  return (max1 - 1) * (max2 - 1)
};