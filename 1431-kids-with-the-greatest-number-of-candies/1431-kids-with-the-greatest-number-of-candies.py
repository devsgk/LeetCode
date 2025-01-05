class Solution:
  def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
    maximum = max(candies)
    result = []

    for i in range(0, len(candies)):
      cur = candies[i]

      if cur + extraCandies >= maximum:
        result.append(True)
      else:
        result.append(False)

    return result
