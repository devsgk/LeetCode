/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const size = new Set(nums).size;
  let count = 0;
  let left = 0;
  const map = new Map();
  
  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
    
    while (map.size === size) {
      count += nums.length - right;
      
      map.set(nums[left], map.get(nums[left]) - 1);
      
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left]);
      }
      
      left++;
    }
  }
  
  return count;
};
