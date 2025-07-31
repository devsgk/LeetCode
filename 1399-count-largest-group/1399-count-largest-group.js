/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let count = 1;
  let freq = {};
  let max = -Infinity;
  let result = 0;

  while (count <= n) {
    const str = String(count);
    const arr = str.split("");
    const sum = arr.map(el => Number(el)).reduce((acc, cur) => acc + cur, 0);
  
    freq[sum] = freq[sum] ? freq[sum] + 1 : 1;

    count++;
  }

  for (const [key, value] of Object.entries(freq)) {
    max = Math.max(value, max);
  }

  for (const [key, value] of Object.entries(freq)) {
    if (value === max) result++;
  }

  return result;
};
