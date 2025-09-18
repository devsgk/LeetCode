/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
  const set = new Set();

  for (const num of nums) {
    set.add(num);
  }

  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const cur = nums[i];

    if (prev + 1 === cur) {
      sum += cur;
    }
  }

  while (set.has(sum)) {
    sum++;
  }

  return sum;
};
