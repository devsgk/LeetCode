/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const arr1 = nums.slice(0, i + 1);
    const arr2 = nums.slice(i + 1);

    const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

    const isEven = (sum1 - sum2) % 2 === 0;

    if (isEven) count++;
  }

  return count;
};
