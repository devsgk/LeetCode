/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    const leftSum = left.reduce((acc, cur) => acc + cur, 0);
    const rightSum = right.reduce((acc, cur) => acc + cur, 0);
    
    if (leftSum === rightSum) {
      return i;
    }
  }
  
  return -1;
};