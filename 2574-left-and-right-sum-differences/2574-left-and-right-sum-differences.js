/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const left = [];
  const right = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left.push(0);
    } else {
      let sum = 0;
      
      for (let j = 0; j < i; j++) {
        sum += nums[j];
      }
      
      left.push(sum);
    }
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right.push(0);
    } else {
      let sum = 0;
      
      for (let j = nums.length - 1; j > i; j--) {
        sum += nums[j];
      }
      
      right.push(sum);
    }
  }
  
  const result = [];
  
  for (const item of left) {
    const abs = Math.abs(item - right.pop());
    
    result.push(abs);
  }
  
  return result;
};