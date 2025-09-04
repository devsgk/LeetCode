/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const result = new Array(num_people).fill(0);

  let count = 1;

  while (candies > 0) {
    const give = Math.min(count, candies);

    result[(count - 1) % num_people] += give;
    candies -= give;
    count++;
  }

  return result;
};
