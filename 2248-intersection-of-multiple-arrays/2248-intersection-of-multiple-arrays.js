/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const freq = {};

  for (const arr of nums) {
    for (const num of arr) {
      freq[num] = freq[num] ? freq[num] + 1 : 1;
    }
  }

  const result = [];

  for (const [key, value] of Object.entries(freq)) {
    if (value === nums.length) {
      result.push(Number(key));
    }
  }

  return result.sort((a, b) => a - b);
};
