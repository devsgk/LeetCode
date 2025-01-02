class Solution:
  def largestAltitude(self, gain: List[int]) -> int:
    sum = 0
    maximum = 0

    for i in range(0, len(gain)):
      sum += gain[i]
      maximum = max(maximum, sum)

    return maximum
