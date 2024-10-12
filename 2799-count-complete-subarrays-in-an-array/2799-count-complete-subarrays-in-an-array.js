/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const set = new Set(nums);
  const size = set.size;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const obj = {};
    let uniqueCount = 0;
    
    for (let j = i; j < nums.length; j++) {
      const cur = nums[j];
      
      if (obj[cur]) {
        obj[cur] += 1;
      } else {
        obj[cur] = 1;
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
