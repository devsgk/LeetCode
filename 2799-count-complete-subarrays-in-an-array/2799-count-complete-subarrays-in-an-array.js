/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const size = new Set(nums).size;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const map = new Map();
    let uniqueCount = 0;
    
    for (let j = i; j < nums.length; j++) {
      if (map.has(nums[j])) {
        map.set(nums[j], map.get(nums[j]) + 1);
      } else {
        map.set(nums[j], 1);
        uniqueCount++;
      }
      
      if (uniqueCount === size) {
        count += nums.length - j;
        break;
      }
    }
  }
  
  return count;
};
