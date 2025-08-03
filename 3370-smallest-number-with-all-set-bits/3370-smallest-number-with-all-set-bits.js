/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
  let result = n;

  while (true) {
    const binary = result.toString(2);
    const set = new Set(binary.split(""));

    if (set.size === 1) break;

    result++;
  }

  return result;
};
