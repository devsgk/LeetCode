/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  const answers = [];
  const numsCopy = nums.slice().sort((a, b) => a - b);
  const sums = [];
  let sum = 0;

  for (const num of numsCopy) {
    sum += num;
    sums.push(sum);
  }

  for (const query of queries) {
    let left = 0;
    let right = sums.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (sums[mid] > query) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    answers.push(left);
  }

  return answers;
};
