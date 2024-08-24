/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let target = [];
  
  for (let i = 0; i < nums.length; i++) {
    const targetIndex = index[i];
    
    if (target[targetIndex] || target[targetIndex] === 0) {
      const copy = target.splice(targetIndex);

      target[targetIndex] = nums[i];
      target = target.concat(copy);
    } else {
      target[targetIndex] = nums[i];
    }
  }

  return target;
};