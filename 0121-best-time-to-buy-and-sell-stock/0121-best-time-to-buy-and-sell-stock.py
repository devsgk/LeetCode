class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    min_price = float("inf")
    max_profit = 0

    for i in range(1, len(prices)):
      min_price = min(min_price, prices[i - 1])
      max_profit = max(max_profit, prices[i] - min_price)

    return max_profit
