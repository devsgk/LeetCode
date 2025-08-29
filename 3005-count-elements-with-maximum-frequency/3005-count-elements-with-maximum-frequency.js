/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const freq = {};
  let max = 1;

  for (const num of nums) {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
    max = Math.max(freq[num], max);
  }

  let count = 0;

  for (const [key, value] of Object.entries(freq)) {
    if (value === max) count++;
  }

  return max * count;
};
