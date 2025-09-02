/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const freq = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur === key) {
      if (freq.get(next)) {
        freq.set(next, freq.get(next) + 1);
      } else {
        freq.set(next, 1);
      }
    }
  }

  let max = 0;
  let result;

  for (const [key, value] of freq) {
    max = Math.max(max, value);

    if (value === max) result = key;
  }

  return result;
};
