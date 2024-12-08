/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);
  
  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(prev2 + nums[i], prev1);
    
    prev2 = prev1;
    prev1 = cur;
  }
  
  return prev1;
};
