/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const arr = nums.slice().sort((a, b) => a - b);
  
  console.log(arr);
  
  return (arr.at(-1) -1) * (arr[arr.length - 2] - 1)
};