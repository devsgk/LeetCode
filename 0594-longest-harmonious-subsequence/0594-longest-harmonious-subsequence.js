/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const freq = new Map();

  for (const num of nums) {
    if (freq.get(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  let result = 0;

  for (const [key, value] of freq) {
    const bigger = key + 1;
    const smaller = key - 1;
    let countSum = 0;

    if (freq.get(bigger)) {
      countSum = freq.get(bigger) + value;
    } else if (freq.get(smaller)) {
      countSum = freq.get(smaller) + value;
    }

    result = Math.max(result, countSum);
  }

  return result;
};
