/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  const count = Math.floor(k / (n - 1));
  const remainder = k - (count * (n - 1));

  if (count % 2 === 0) return remainder;
  else return n - remainder - 1;
};
