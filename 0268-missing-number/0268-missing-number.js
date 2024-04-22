/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const length = nums.length;
  let count = 0;
  
  while (count <= length) {
    if (!nums.includes(count)){
      return count;
    }
    count++;
  }
};