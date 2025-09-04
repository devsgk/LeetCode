/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const result = new Array(num_people).fill(0);

  let count = 1;
  let sum = 0;

  while (sum < candies) {
    for (let i = 0; i < result.length; i++) {
      sum += count;
      if (sum < candies) result[i] += count;
      else {
        const remainder = candies - (result.reduce((acc, cur) => acc + cur, 0));

        result[i] += remainder;
      }
      count++;
    }
  }

  return result;
};
