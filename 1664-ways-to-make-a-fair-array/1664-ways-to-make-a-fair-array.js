/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  let count = 0;
  let oddSum = 0;
  let evenSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      oddSum += nums[i];
    } else {
      evenSum += nums[i];
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    
    if ((i % 2) === 0) {
      oddSum -= cur;
      
      if (oddSum === evenSum) {
        count++;
      }
      
      evenSum += cur;
    } else {
      evenSum -= cur;
      
      if (evenSum === oddSum) {
        count++;
      }
      
      oddSum += cur;
    } 
  }
  
  return count;
};