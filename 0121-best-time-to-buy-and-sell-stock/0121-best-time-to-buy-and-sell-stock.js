/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    let profit = cur - buy;

    if (profit > 0) max = Math.max(max, profit);

    buy = Math.min(buy, cur);
  }

  return max;
};
