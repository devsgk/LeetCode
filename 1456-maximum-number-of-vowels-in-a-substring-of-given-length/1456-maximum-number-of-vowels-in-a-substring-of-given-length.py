class Solution:
    def maxVowels(self, s: str, k: int) -> int:
      vowels = ["a", "e", "i", "o", "u"]
      left = 0
      right = 0
      maximum = 0
      count = 0

      for right in range(0, len(s)):
        if s[right] in vowels:
            count += 1

        if right - left + 1 > k:
          if s[left] in vowels:
            count -= 1

          left += 1

        maximum = max(maximum, count)

      return maximum
