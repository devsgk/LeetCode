/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);  
  let count = 0;
  
  while (sorted.length) {
    const first = sorted.pop();
    const second = sorted.pop();

    if (first !== second) return false;
    count++;
  }
  
  return count === (nums.length / 2);
};
