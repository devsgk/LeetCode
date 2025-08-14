/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity;
  let maxProfit = -Infinity;

  for (let i = 0; i < prices.length - 1; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(prices[i + 1] - min, maxProfit);
  }

  return maxProfit > 0 ? maxProfit : 0
}
