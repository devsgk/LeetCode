/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let arr = nums.filter(num => num > 0);
  let count = 0;

  while (arr.length) {
    let min = Math.min(...arr);
    
    arr = arr.map(num => num - min).filter(num => num > 0);
    count++;
  }
  
  return count;
};
