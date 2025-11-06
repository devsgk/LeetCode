/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const freq = {};

  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur === key) {
      freq[next] = freq[next] ? freq[next] + 1 : 1;
    }
  }

  let max = 0;
  let answer;

  for (const [key, value] of Object.entries(freq)) {
    max = Math.max(max, value);

    if (value === max) answer = Number(key);
  }

  return answer;
}
