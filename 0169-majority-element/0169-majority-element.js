/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj = {};
  const arr = [];
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  
  for (const [key, value] of Object.entries(obj)) {
    if (value >= nums.length / 2) {
      arr.push(Number(key));
    }
  }
  
  return arr[0];
};