/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  let rightSum = sum;
  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    rightSum -= cur;

    if (leftSum === rightSum) {
      return i;
    }
    
    leftSum += cur;
  }
  
  return -1;
};