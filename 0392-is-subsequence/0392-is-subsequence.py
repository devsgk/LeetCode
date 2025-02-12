class Solution:
  def isSubsequence(self, s: str, t: str) -> bool:
    index = 0

    if s == "":
      return True

    for char in t:
      if index < len(s) and s[index] == char:
        index += 1
    
    return len(s) == index
