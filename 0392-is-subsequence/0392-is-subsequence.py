class Solution:
  def isSubsequence(self, s: str, t: str) -> bool:
    left = 0

    for right in range(0, len(t)):
      if t[right] == s[left]:
        left += 1

      if left == len(s):
        return True

    return left == len(s)
