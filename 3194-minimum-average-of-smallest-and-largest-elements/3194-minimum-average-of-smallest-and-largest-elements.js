/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
  nums.sort((a, b) => a - b);

  const averages = [];

  while (nums.length)  {
    const min = nums.shift();
    const max = nums.pop();
    const avg = (min + max) / 2;
  
    averages.push(avg);
  }
  
  return Math.min(...averages);
};
