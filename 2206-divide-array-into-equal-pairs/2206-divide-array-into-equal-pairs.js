/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const map = new Map();
  
  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }
  
  return map.size === 0;
};
