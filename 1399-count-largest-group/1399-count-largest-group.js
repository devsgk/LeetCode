/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let count = 1;
  let map = new Map();
  let maxSize = 0;

  while (count <= n) {
    const sum = count.toString().split("").reduce((acc, cur) => acc + Number(cur), 0);
    const newCount = (map.get(sum) || 0) + 1;

    map.set(sum, newCount);
    maxSize = Math.max(maxSize, newCount)

    count++;
  }

  let result = 0;

  for (let count of map.values()) {
    if (count === maxSize) result++;
  }

  return result;
};
