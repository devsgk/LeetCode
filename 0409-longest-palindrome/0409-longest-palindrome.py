class Solution:
  def longestPalindrome(self, s: str) -> int:
    freq = Counter(s)
    count = 0
    has_odd_freq = False
    
    for value in freq.values():
      if value % 2 == 0:
        count += value
      else:
        count += value - 1
        has_odd_freq = True

    return count + (1 if has_odd_freq == True else 0)
