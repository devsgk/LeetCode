/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  const sum1 = nums.reduce((acc, cur) => acc + cur, 0);
  const arr = [];
  
  nums.forEach(num => {
    arr.push(...String(num).split(""))
  })

  const sum2 = arr.reduce((acc, cur) => acc + Number(cur), 0);
  
  return Math.abs(sum1 - sum2);
};