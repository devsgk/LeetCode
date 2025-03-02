class Solution:
  def removeStars(self, s: str) -> str:
    result = []

    for i in range(0, len(s)):
      cur = s[i]

      if cur != "*":
        result.append(cur)
      else:
        result.pop()

    return "".join(result)
