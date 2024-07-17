/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i];
    
    for (let j = i + 1; j < nums.length; j++) {
      const right = nums[j];
      
      if (left === right && (i * j) % k === 0) {
        console.log(left ,right)
        count++;
      }
    }
  }
  
  return count;
};