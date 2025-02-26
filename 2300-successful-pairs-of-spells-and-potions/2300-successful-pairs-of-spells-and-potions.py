class Solution:
  def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
    result = []
    potions.sort()

    for spell in spells:
      target = math.ceil(success / spell)
      index = bisect.bisect_left(potions, target)

      result.append(len(potions) - index)
  
    return result
