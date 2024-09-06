/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  let ans = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const unique = new Set();
    
    for (let j = i; j < nums.length; j++) {
      unique.add(nums[j]);
      ans += (unique.size ** 2);
    }
  }
  
  return ans;
};
