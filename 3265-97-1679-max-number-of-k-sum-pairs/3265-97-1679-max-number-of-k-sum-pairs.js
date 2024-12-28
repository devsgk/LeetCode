/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const obj = {};
  let count = 0;
  
  for (const num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (const num of nums) {
    if (obj[num] > 0 && obj[k - num] > 0) {
      obj[num]--;
      obj[k - num]--;
      
      if (obj[num] >= 0 && obj[k - num] >= 0) count++;
    }
  }
  
  return count;
};
