/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const freq = {};

  for (const num of nums) {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  }

  nums.sort((a, b) => {
    if (freq[a] === freq[b]) return b - a;
    
    return freq[a] - freq[b];
  });

  return nums;
};
