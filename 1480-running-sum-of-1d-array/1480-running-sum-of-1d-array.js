/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = 0;
  const arr = [];
  
  nums.forEach(num => {
    sum += num;
    arr.push(sum);
  });
  
  return arr;
};