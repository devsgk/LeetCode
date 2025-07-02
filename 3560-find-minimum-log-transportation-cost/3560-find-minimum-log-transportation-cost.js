/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
  let totalCost = 0;

  while ((n / k) > 1) {
    const quotient = Math.floor(n / k);
    const remainder = n % k;
    let cost = 0;

    if (remainder) {
      cost = (k**quotient) * remainder;
    } else {
      cost = k**quotient;
    }

    n = remainder;
    totalCost += cost;
  }

  while ((m / k) > 1) {
    const quotient = Math.floor(m / k);
    const remainder = m % k;
    let cost = 0;

    if (remainder) {
      cost = (k**quotient) * remainder;
    } else {
      cost = k**quotient;
    }

    m = remainder;
    totalCost += cost;
  }

  return totalCost;
};
