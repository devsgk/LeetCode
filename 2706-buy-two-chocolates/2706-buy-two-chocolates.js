/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  const sorted = prices.sort((a, b) => a - b);
  
  const change = money - (sorted[0] + sorted[1]);
  
  if (change >= 0) return change;
  
  return money;
};