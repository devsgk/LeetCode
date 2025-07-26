/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  let count = 0;

  for (let i = 0; i <= String(num).length - k; i++) {
    const subString = String(num).slice(i, i + k);

    if (num % Number(subString) === 0) count++;
  }

  return count;
};
