/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let copy = nums.slice();
  let newArr= [];
  
  while (copy.length > 1) {
    for (let i = 0; i < copy.length - 1; i++) {
      const sum = (copy[i] + copy[i + 1]) % 10;
      
      newArr.push(sum);
    }

    copy = newArr;
    newArr = [];
  }
  
  return copy[0];
};